<template>
  <q-menu class="search-menu">
    <q-list style="width: 380px">
      <q-item>
        <q-item-section>
          <div class="row justify-between">
            <div>
              <div class="label">{{ $t('adults') }}</div>
              <div class="subtitle">{{ $t('adults_subtitle') }}</div>
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="canRemoveAdult()"
                  icon="remove"
                  @click="guests.adults--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.adults }}</div>
                <q-btn icon="add" @click="addAdult()" round outline dense />
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <div class="row justify-between">
            <div>
              <div class="label">{{ $t('children') }}</div>
              <div class="subtitle">{{ $t('children_subtitle') }}</div>
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="guests.children > 0"
                  icon="remove"
                  @click="guests.children--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.children }}</div>
                <q-btn icon="add" @click="addChild()" round outline dense />
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-item>
        <q-item-section>
          <div class="row justify-between">
            <div>
              <div class="label">{{ $t('infants') }}</div>
              <div class="subtitle">{{ $t('infants_subtitle') }}</div>
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="guests.infants > 0"
                  icon="remove"
                  @click="guests.infants--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.infants }}</div>
                <q-btn icon="add" @click="addInfant()" round outline dense />
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <div class="row justify-between">
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
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="guests.pets > 0"
                  icon="remove"
                  @click="guests.pets--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.pets }}</div>
                <q-btn icon="add" @click="addPet()" round outline dense />
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="subtitle">{{ $t('pets_info') }}</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script lang="ts" setup>
import { Guests } from 'src/models/guests'

const props = defineProps<{
  guests: Guests
}>()

const emit = defineEmits<{
  (e: 'update:guests', value: any): void
}>()

const canRemoveAdult = () => (props.guests.children === 0 && props.guests.infants === 0 && props.guests.pets === 0 && props.guests.adults > 0) || props.guests.adults > 1;

const addAdult = () => {
  props.guests.adults++;
  emit('update:guests', props.guests);
}

const addChild = () => {
  props.guests.children++;

  if (props.guests.adults === 0) {
    props.guests.adults++;
  }
  emit('update:guests', props.guests);
}

const addInfant = () => {
  props.guests.infants++;

  if (props.guests.adults === 0) {
    props.guests.adults++;
  }
  emit('update:guests', props.guests);
}

const addPet = () => {
  props.guests.pets++;

  if (props.guests.adults === 0) {
    props.guests.adults++;
  }
  emit('update:guests', props.guests);
}

</script>
