<template>
  <div class="row justify-between items-center q-pb-sm">
    <q-btn v-if="back === true" icon="chevron_left" @click="emit('back')" flat round />
    <div v-else style="width: 42px"></div>

    <div class="label">{{ $t('month-year', { month: $t(`months.${month}`), year: year }) }}</div>

    <q-btn v-if="next === true" icon="chevron_right" @click="emit('next')" flat round />
    <div v-else style="width: 42px"></div>
  </div>
  <div class="date-picker">
    <table style="width: 100%">
      <tr>
        <td
          class="day text-center q-pb-sm"
          v-for="(_, index) in nbDay"
          :key="index"
        >{{ $t(`days.${getDayNumber(index)}`).substring(0, 2) }}</td>
      </tr>
      <tr v-for="(_, weekIndex) in getWeeksInMonth()" :key="weekIndex">
        <td
          class="text-center"
          v-for="(_, dayIndex) in nbDay"
          :key="dayIndex"
          :class="getClassCell(weekIndex, dayIndex)"
        >
          <q-btn
            :class="getClassBtn(weekIndex, dayIndex)"
            v-if="isValidDay(weekIndex, dayIndex)"
            :label="getDay(weekIndex, dayIndex)"
            :disable="isBeforeToday(weekIndex, dayIndex)"
            @click="selectDate(weekIndex, dayIndex)"
            round
            flat
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDatePicker, nbDay } from 'src/composables/useDatePicker';
import { watch } from 'vue';

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

const isSundayFirst: boolean = Number.parseInt(t('firstDayOfWeek')) === 0;
const { updateProps, getDayNumber, getWeeksInMonth, getDay, isValidDay, selectDate, isBeforeToday, getClassBtn, getClassCell } = useDatePicker(props, isSundayFirst)

watch(props, () => { updateProps(props) })

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
    background-color: rgb(228, 228, 228);
    border-radius: 32px 0 0 32px;
  }

  td.selected-to {
    background-color: rgb(228, 228, 228);
    border-radius: 0 32px 32px 0;
  }

  table {
    border-spacing: 0;
  }
}
</style>
