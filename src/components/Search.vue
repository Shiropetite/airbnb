<template>
  <div class="search bg-white">
    <div class="row justify-center">
      <div class="input" style="width: 260px">
        <div class="label">Destination</div>
        <input v-model="destination" placeholder="Où allez-vous" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">Arrivée</div>
        <input v-model="destination" placeholder="Quand ?" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">Départ</div>
        <input v-model="destination" placeholder="Quand ?" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">Voyageurs</div>
        <input v-model="destination" placeholder="Qui ?" />
      </div>

      <div class="row items-center q-mr-sm">
        <q-btn icon="search" color="primary" round />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const destination = ref("")

</script>
<style lang="scss">
.search {
  border-radius: 32px;
  border: solid 1px #ddd;
  color: #222;
  width: 848px;
  height: 64px;

  .input {
    border-radius: 32px;
    padding: 12px 28px;
    transition: background-color linear 0.2s;

    .label {
      font-size: 12px;
      line-height: 16px;
      font-weight: 800;
      letter-spacing: 0.04em;
      padding-bottom: 2px;
    }

    input {
      background-color: transparent;
      border: none;
      font-size: 14px;
      line-height: 18px;
      color: #222;
      text-overflow: ellipsis;
    }

    input:focus-visible {
      outline: none;
    }
  }

  .input:hover {
    background-color: rgb(238, 238, 238);
  }
}
</style>
