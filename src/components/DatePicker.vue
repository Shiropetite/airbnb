<template>
  <div class="row justify-between items-center q-pb-sm">
    <q-btn v-if="back === true" icon="chevron_left" @click="emit('back')" flat round />
    <div v-else style="width: 42px"></div>

    <div class="label">{{ $t(`months.${month}`) }} {{ year }}</div>

    <q-btn v-if="next === true" icon="chevron_right" @click="emit('next')" flat round />
    <div v-else style="width: 42px"></div>
  </div>
  <div class="date-picker">
    <table style="width: 100%">
      <tr>
        <td
          class="day text-center q-pb-sm"
          v-for="(_, index) in 7"
        >{{ $t(`days.${getDayIndex(index)}`).substring(0, 2) }}</td>
      </tr>
      <tr v-for="(_, weekIndex) in nbWeek()">
        <td
          class="text-center"
          v-for="(_, dayIndex) in 7"
          :class="`${isSelectedFrom(getDay(weekIndex, dayIndex)) ? 'selected-from' : ''}
          ${isSelectedTo(getDay(weekIndex, dayIndex)) ? 'selected-to' : ''}
          ${isBetween(weekIndex, dayIndex) ? 'range' : ''}`"
        >
          <q-btn
            v-if="isDay(weekIndex, dayIndex)"
            :label="getDay(weekIndex, dayIndex)"
            :disable="isBeforeToday(getDay(weekIndex, dayIndex))"
            :class="`${isBeforeToday(getDay(weekIndex, dayIndex)) ? 'no-hover' : ''}
            ${isSelected(getDay(weekIndex, dayIndex)) ? 'selected' : ''}
            ${isBetween(weekIndex, dayIndex) ? 'range' : ''}`"
            @click="selectDate(getDay(weekIndex, dayIndex))"
            round
            flat
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { date } from 'quasar';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  modelValue: { from: string, to: string, margin?: number },
  month: number,
  year: number,
  back?: boolean,
  next?: boolean
}>()

const emit = defineEmits<{
  (e: 'back'): void,
  (e: 'next'): void,
  (e: 'update:modelValue', value: { from: string, to: string, margin?: number }): void
}>()

const { t } = useI18n();

const dayInWeek = 7;
const today = new Date();
const currentDate = ref(new Date(props.year, props.month, 1));

watch(props, () => {
  currentDate.value = new Date(props.year, props.month, 1)
}, { deep: true })

const selectDate = (day: number) => {
  const selected = new Date(props.year, props.month, day)
  const dateString = date.formatDate(selected, 'DD/MM/YYYY');

  if (dateString === props.modelValue.from && dateString === props.modelValue.to) {
    props.modelValue.from = ''
    props.modelValue.to = ''
    return;
  }

  if (dateString === props.modelValue.to) {
    props.modelValue.to = ''
    return;
  }

  if (!!props.modelValue.from) {
    if (selected < date.extractDate(props.modelValue.from, 'DD/MM/YYYY')) {
      props.modelValue.from = dateString
    }
    else {
      props.modelValue.to = dateString
    }
  }
  else {
    if (selected === date.extractDate(props.modelValue.from, 'DD/MM/YYYY')) {
      props.modelValue.from = ''
    }
    props.modelValue.from = dateString;
  }


}

const isSelected = (day: number): boolean => {
  const dateString = date.formatDate(new Date(props.year, props.month, day), 'DD/MM/YYYY');
  return !!props.modelValue.to && dateString === props.modelValue.to ||
    !!props.modelValue.from && dateString === props.modelValue.from;
}


const isSelectedFrom = (day: number): boolean => {
  const dateString = date.formatDate(new Date(props.year, props.month, day), 'DD/MM/YYYY');
  return !!props.modelValue.from && !!props.modelValue.to && dateString === props.modelValue.from && dateString !== props.modelValue.to;
}

const isSelectedTo = (day: number): boolean => {
  const dateString = date.formatDate(new Date(props.year, props.month, day), 'DD/MM/YYYY');
  return !!props.modelValue.from && !!props.modelValue.to && dateString === props.modelValue.to && dateString !== props.modelValue.from;
}

const isBetween = (weekIndex: number, dayIndex: number): boolean => {
  const day = getDay(weekIndex, dayIndex)
  const selected = new Date(props.year, props.month, day)
  if (!!props.modelValue.from && !!props.modelValue.to) {
    return isDay(weekIndex, dayIndex) && selected > date.extractDate(props.modelValue.from, 'DD/MM/YYYY')
      && selected < date.extractDate(props.modelValue.to, 'DD/MM/YYYY')
  }
  return false;
}

// Return true if the day selected is before today
const isBeforeToday = (day: number): boolean =>
  day < today.getDate() && props.month === today.getMonth() || props.month < today.getMonth() || props.year < today.getFullYear();

// Return true if the day exist
const isDay = (weekIndex: number, dayIndex: number): boolean =>
  getDay(weekIndex, dayIndex) <= date.daysInMonth(currentDate.value) && getDay(weekIndex, dayIndex) > 0;

const getDay = (weekIndex: number, dayIndex: number) =>
  weekIndex * dayInWeek + (dayIndex + 1) - getDayIndex(currentDate.value.getDay())

const nbWeek = () => {
  const nbDayInMonth = date.daysInMonth(currentDate.value)
  const allDay = nbDayInMonth + getDayIndex(currentDate.value.getDay())
  return Math.round(allDay / 7) + 1;
}

const getDayIndex = (day: number) => {
  const firstDayOfWeek = Number.parseInt(t('firstDayOfWeek'));
  return day + firstDayOfWeek < 7 ? day + firstDayOfWeek : dayInWeek - day - firstDayOfWeek
}


</script>
<style lang="scss">
.date-picker {
  .day {
    font-size: 12px;
    font-weight: 600;
    color: #717171;
  }

  .q-btn:hover {
    background-color: transparent !important;
    border: solid 2px black;
  }

  .q-btn:hover.disabled {
    border: none;
  }

  .q-btn:hover.selected {
    border: none;
    background-color: black !important;
  }

  .q-btn.selected {
    background-color: rgb(32, 32, 32) !important;
    color: white;
  }

  td.range {
    background-color: rgb(228, 228, 228);
  }

  td.selected-from {
    background-color: rgb(211, 211, 211);
    border-radius: 32px 0 0 32px;
  }

  td.selected-to {
    background-color: rgb(211, 211, 211);
    border-radius: 0 32px 32px 0;
  }

  table {
    border-spacing: 0;
  }
}
</style>
