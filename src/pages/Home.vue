<template>
  <q-page class="home bg-black">
    <navbar v-model="optionSelected" />

    <search-bar :model-value="optionSelected" />

    <div class="row items-center justify-evenly text-white">Home</div>
  </q-page>
</template>

<script lang="ts" setup>
// Libs
import { Ref, ref } from 'vue';

// Model
import { Options } from 'src/models/search';

// Components
import Navbar from 'src/components/home/Navbar.vue';
import SearchBar from 'src/components/home/search-bar/Index.vue';

const optionSelected: Ref<Options> = ref(Options.PLACE_TO_STAY);

</script>
<style lang="scss">
.home {
  padding: 16px 24px;

  @media (min-width: $breakpoint-sm-min) {
    padding-top: 0;
  }

  @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
