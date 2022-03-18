<template>
  <q-menu class="search-menu">
    <q-list style="width: 380px">
      <q-item>
        <q-item-section>
          <div class="row justify-between">
            <div>
              <div class="label">Adultes</div>
              <div class="subtitle">13 ans et plus</div>
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="canRemoveAdult()"
                  icon="remove"
                  @click="guests.adult--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.adult }}</div>
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
              <div class="label">Enfants</div>
              <div class="subtitle">De 2 à 12 ans</div>
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="guests.child > 0"
                  icon="remove"
                  @click="guests.child--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.child }}</div>
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
              <div class="label">Bébé</div>
              <div class="subtitle">- de 2 ans</div>
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="guests.baby > 0"
                  icon="remove"
                  @click="guests.baby--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.baby }}</div>
                <q-btn icon="add" @click="addBaby()" round outline dense />
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <div class="row justify-between">
            <div class="col-7">
              <div class="label">Animaux domestiques</div>
              <q-btn
                class="link no-hover no-animation"
                align="left"
                label="Vous voyagez avec un animal d'assistance ?"
                no-caps
                flat
              />
            </div>
            <div>
              <div class="row items-center">
                <q-btn
                  v-if="guests.animal > 0"
                  icon="remove"
                  @click="guests.animal--"
                  round
                  outline
                  dense
                />
                <div class="q-pa-md">{{ guests.animal }}</div>
                <q-btn icon="add" @click="addAnimal()" round outline dense />
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section
          class="subtitle"
        >Si plus de deux animaux de compagnie vous accompagnent, veuillez en informer votre hôte.</q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  guests: any
}>()

const emit = defineEmits<{
  (e: 'update:guests', value: any): void
}>()

const canRemoveAdult = () => (props.guests.child === 0 && props.guests.baby === 0 && props.guests.animal === 0 && props.guests.adult > 0) || props.guests.adult > 1;

const addAdult = () => {
  props.guests.adult++;
  emit('update:guests', props.guests);
}

const addChild = () => {
  props.guests.child++;

  if (props.guests.adult === 0) {
    props.guests.adult++;
  }
  emit('update:guests', props.guests);
}

const addBaby = () => {
  props.guests.baby++;

  if (props.guests.adult === 0) {
    props.guests.adult++;
  }
  emit('update:guests', props.guests);
}

const addAnimal = () => {
  props.guests.animal++;

  if (props.guests.adult === 0) {
    props.guests.adult++;
  }
  emit('update:guests', props.guests);
}

</script>
