<template>
  <q-menu class="search-menu guest-menu">
    <q-list style="width: 380px">
      <add-remove-item
        item-name="adults"
        :nb-item="guests.adults"
        :disable-minus-btn="canRemoveAdult"
        :remove-item="() => { guests.adults-- }"
        :add-item="() => { props.guests.adults++ }"
      />

      <q-separator />

      <add-remove-item
        item-name="children"
        :nb-item="guests.children"
        :disable-minus-btn="() => guests.children > 0"
        :remove-item="() => { guests.children-- }"
        :add-item="addChild"
      />

      <q-separator />

      <add-remove-item
        item-name="infants"
        :nb-item="guests.infants"
        :disable-minus-btn="() => guests.infants > 0"
        :remove-item="() => { guests.infants-- }"
        :add-item="addInfant"
      />

      <q-separator />

      <add-remove-item
        item-name="pets"
        :nb-item="guests.pets"
        :disable-minus-btn="() => guests.pets > 0"
        :remove-item="() => { guests.pets-- }"
        :add-item="addPet"
      >
        <template #text>
          <div class="col-7">
            <div class="label">{{ $t('pets') }}</div>
            <q-btn
              class="link no-hover no-animation"
              align="left"
              :label="$t('pets_subtitle')"
              no-caps
              flat
            />
          </div>
        </template>
      </add-remove-item>

      <q-item>
        <q-item-section class="subtitle">{{ $t('pets_info') }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script lang="ts" setup>
import { watch } from 'vue';
import { Guests, updateGuests } from 'src/models/guests'
import AddRemoveItem from 'src/components/AddRemoveItem.vue';

const props = defineProps<{
  guests: Guests
}>()

const emit = defineEmits<{
  (e: 'update:guests', value: any): void
}>()

const { canRemoveAdult, addChild, addInfant, addPet } = updateGuests(props.guests)

watch(props, () => {
  emit('update:guests', props.guests);
}, { deep: true })

</script>
