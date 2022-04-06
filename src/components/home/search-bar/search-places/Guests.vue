<template>
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
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { Guests, defaultGuests } from 'src/models/guests'

import GuestsMenu from './GuestsMenu.vue'

const guests: Ref<Guests> = ref(defaultGuests);

const nbGuests = () => guests.value.adults + guests.value.children + guests.value.infants + guests.value.pets;
</script>
