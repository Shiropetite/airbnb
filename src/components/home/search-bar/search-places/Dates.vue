<template>
  <div v-if="isFlexible === true" class="col input">
    <!-- <div class="label">{{ $t('check_in') }}</div> -->
    <q-btn class="no-hover" align="left" no-caps flat>
      <date-menu v-model="selectedDate" :is-flexible="false" />
    </q-btn>
  </div>

  <div v-if="!isFlexible" class="col input">
    <div class="label">{{ $t('check_in') }}</div>
    <q-btn
      class="no-hover"
      align="left"
      :class="!!selectedDate.from ? '' : 'placeholder'"
      :label="!!selectedDate.from ? displayDate(selectedDate.from) : $t('check_in_out_placeholder')"
      no-caps
      flat
    >
      <date-menu v-model="selectedDate" :is-flexible="false" />
    </q-btn>
  </div>

  <q-separator v-if="!isFlexible" class="q-my-md" size="sm" color="$grey" vertical />

  <div v-if="!isFlexible" class="col input">
    <div class="label">{{ $t('check_out') }}</div>
    <q-btn
      class="no-hover"
      align="left"
      :class="!!selectedDate.to ? '' : 'placeholder'"
      :label="!!selectedDate.to ? displayDate(selectedDate.to) : $t('check_in_out_placeholder')"
      no-caps
      flat
    >
      <date-menu v-model="selectedDate" :is-flexible="false" />
    </q-btn>
  </div>

  <div class="q-pa-md">
    <q-btn
      v-if="!!selectedDate.to || !!selectedDate.from"
      class="label"
      icon="close"
      size="sm"
      @click="selectedDate = { from: '', to: '' }"
      round
      dense
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { date } from 'quasar';

import DateMenu from './DateMenu.vue'

const { t } = useI18n();

const isFlexible = ref(false);
const selectedDate = ref({ from: '', to: '' });

const displayDate = (d: string): string => {
  const da = date.extractDate(d, 'DD/MM/YYYY')
  let string = t('day-month', { day: da.getDate(), month: t(`months.${da.getMonth()}`) });
  string += !!selectedDate.value.margin ? ` ±${selectedDate.value.margin}` : ''
  return string;
}

</script>
