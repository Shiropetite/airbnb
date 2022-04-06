<template>
  <div class="search-place">
    <div class="row justify-center items-center">
      <location />

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <dates />

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <guests />

      <div class="row items-center q-mr-sm">
        <!-- :label="$t('search')"-->
        <q-btn class="search-btn q-py-sm" icon="search" color="primary" round no-caps />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Location from './Location.vue';
import Dates from './Dates.vue';
import Guests from './Guests.vue'
</script>

<style lang="scss">
.search-place {
  background-color: white;
  border-radius: 32px;
  border: solid 1px #ddd;
  color: #222;
  width: 850px;
  height: 66px;

  .search-btn {
    font-size: 12px;
    padding: 14px;
  }
}
</style>

