<template>
  <q-menu class="search-menu date-menu" style="width: 900px">
    <div class="row justify-center q-pa-md">
      <div class="tab rounded q-pa-xs q-mb-md">
        <q-btn
          class="col no-hover no-animation q-mr-sm"
          :class="optionSelected === 'calendar' ? 'bg-white' : ''"
          :label="$t('calendar')"
          @click="chooseCalendar()"
          rounded
          no-caps
          dense
          flat
        />
        <q-btn
          class="no-hover no-animation"
          :class="optionSelected === 'flexible' ? 'bg-white' : ''"
          :label="$t('flexible')"
          @click="chooseFlexible()"
          rounded
          no-caps
          dense
          flat
        />
      </div>
      <div v-if="optionSelected === 'calendar'" class="col-12">
        <div class="row justify-center">
          <div class="col-5 q-mr-xl">
            <date-picker
              v-model="modelValue"
              :month="monthN"
              :year="yearN"
              :back="true"
              @back="back()"
            />
          </div>
          <div class="col-5">
            <date-picker
              v-model="modelValue"
              :month="monthN1"
              :year="yearN1"
              :next="true"
              @next="next()"
            />
          </div>
        </div>
        <div class="outline-btn q-px-xl row q-col-gutter-sm" style="margin-top: 16px;">
          <div>
            <q-btn
              class="no-hover"
              :label="$tc('day', 1, { count: 1 })"
              :class="modelValue.margin === 1 ? 'selected' : ''"
              @click="chooseMargin(1)"
              no-caps
              rounded
              flat
            />
          </div>
          <div>
            <q-btn
              class="no-hover"
              :label="$tc('day', 2, { count: 2 })"
              :class="modelValue.margin === 2 ? 'selected' : ''"
              @click="chooseMargin(2)"
              no-caps
              rounded
              flat
            />
          </div>
          <div>
            <q-btn
              class="no-hover"
              :label="$tc('day', 3, { count: 3 })"
              :class="modelValue.margin === 3 ? 'selected' : ''"
              @click="chooseMargin(3)"
              no-caps
              rounded
              flat
            />
          </div>
          <div>
            <q-btn
              class="no-hover"
              :label="$tc('day', 7, { count: 7 })"
              :class="modelValue.margin === 7 ? 'selected' : ''"
              @click="chooseMargin(7)"
              no-caps
              rounded
              flat
            />
          </div>
        </div>
      </div>
      <div v-else class="col-12">
        <div class="flexible-text text-center">{{ $t('stayWeekend') }}</div>
        <div class="outline-btn q-pb-md row justify-center q-col-gutter-sm">
          <div>
            <q-btn class="no-hover" :label="$t('weekend')" rounded no-caps flat />
          </div>
          <div>
            <q-btn class="no-hover" :label="$t('week')" rounded no-caps flat />
          </div>
          <div>
            <q-btn class="no-hover" :label="$t('month')" rounded no-caps flat />
          </div>
        </div>
        <div class="flexible-text text-center">{{ $t('goIn') }}</div>
      </div>
    </div>
  </q-menu>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import DatePicker from 'src/components/DatePicker.vue';

const props = defineProps<{
  modelValue: { from: string, to: string, margin?: number, duration?: string, months?: number[] },
  isFlexible: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: { from: string, to: string, margin?: number, duration?: string, months?: number[] }): void,
  (e: 'update:isFlexible', value: boolean): void
}>()

const optionSelected: Ref<string> = ref(props.isFlexible ? 'flexible' : 'calendar');

const today = new Date();

const monthN = ref(today.getMonth());
const yearN = ref(today.getFullYear());

const monthN1 = ref(today.getMonth() === 11 ? 0 : today.getMonth() + 1);
const yearN1 = ref(today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear());

const chooseMargin = (margin: number) => {
  if (margin === props.modelValue.margin) {
    props.modelValue.margin = undefined
  }
  else {
    props.modelValue.margin = margin;
  }
  emit('update:modelValue', props.modelValue)
}

const back = () => {
  if (monthN.value === 0) {
    monthN.value = 11
    yearN.value -= 1
  }
  else {
    monthN.value -= 1
  }

  if (monthN1.value === 0) {
    monthN1.value = 11
    yearN1.value -= 1
  }
  else {
    monthN1.value -= 1
  }

}

const next = () => {
  if (monthN.value === 11) {
    monthN.value = 0
    yearN.value += 1
  }
  else {
    monthN.value += 1
  }

  if (monthN1.value === 11) {
    monthN1.value = 0
    yearN1.value += 1
  }
  else {
    monthN1.value += 1
  }
}

const chooseCalendar = () => {
  optionSelected.value = 'calendar'
  props.modelValue.duration = undefined;
  props.modelValue.months = undefined;
  emit('update:isFlexible', false)
}

const chooseFlexible = () => {
  optionSelected.value = 'flexible'
  props.modelValue.from = '';
  props.modelValue.to = '';
  props.modelValue.margin = undefined;
  props.modelValue.months = [monthN.value, monthN1.value];
  emit('update:isFlexible', true)
}

</script>
<style lang="scss">
.date-menu {
  .q-btn {
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
    transition: background-color linear 0.1s;
  }

  .flexible-text {
    color: #717171;
    font-size: 18px;
    padding: 8px 0 16px;
  }

  .outline-btn {
    .q-btn {
      font-weight: 300;
      border: solid 1px rgb(221, 221, 221);
    }

    .q-btn:hover {
      background-color: white;
      border-color: black;

      .q-focus-helper {
        visibility: hidden;
      }
    }

    .selected {
      border: solid 2px black;
    }
  }

  .tab {
    background-color: rgb(235, 235, 235);
  }
}
</style>
