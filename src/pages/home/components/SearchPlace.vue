<template>
  <div class="search bg-white">
    <div class="row justify-center">
      <div class="input" style="width: 260px">
        <div class="label">{{ $t('location') }}</div>
        <input v-model="destination" :placeholder="$t('location_placeholder')" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">{{ $t('check_in') }}</div>
        <q-btn
          class="no-hover"
          align="left"
          :class="!!selectedDate.from ? '' : 'placeholder'"
          :label="!!selectedDate.from ? displayDate(selectedDate.from) : $t('check_in_out_placeholder')"
          no-caps
          flat
        >
          <date-menu v-model="selectedDate" />
        </q-btn>
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">{{ $t('check_out') }}</div>
        <q-btn
          class="no-hover"
          align="left"
          :class="!!selectedDate.to ? '' : 'placeholder'"
          :label="!!selectedDate.to ? displayDate(selectedDate.to) : $t('check_in_out_placeholder')"
          no-caps
          flat
        >
          <date-menu v-model="selectedDate" />
        </q-btn>
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">{{ $t('guests') }}</div>
        <q-btn
          class="no-hover"
          align="left"
          :class="nbGuests() === 0 ? 'placeholder' : ''"
          :label="$tc('guests_placeholder', nbGuests(), { count: nbGuests() })"
          no-caps
          flat
        >
          <guests-menu :guests="guests" @update:guests="(value: any) => { guests = value }" />
        </q-btn>
      </div>

      <div class="row items-center q-mr-sm">
        <q-btn
          style="font-size: 16px; font-weight: 500; letter-spacing: 0.5px;"
          class="q-py-sm"
          icon="search"
          :label="$t('search')"
          color="primary"
          rounded
          no-caps
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Guests, defaultGuests } from 'src/models/guests'
import GuestsMenu from './GuestsMenu.vue'
import DateMenu from './DateMenu.vue'
import { date } from 'quasar';

const destination: Ref<string> = ref("");
const guests: Ref<Guests> = ref(defaultGuests);
const selectedDate: Ref<{ from: string, to: string }> = ref({ from: '', to: '' });

const { t } = useI18n();

const displayDate = (d: string) => {
  const da = date.extractDate(d, 'DD/MM/YYYY')
  return da.getDate() + " " + t(`month.${da.getMonth()}`);
}

const nbGuests = () => guests.value.adults + guests.value.children + guests.value.infants + guests.value.pets;

</script>

