<template>
  <q-page class="bg-black">
    <navbar-vue v-model="optionSelected" />
    <div class="row justify-center">
      <search-place v-if="optionSelected === 'place-to-stay'" />
      <search-experience v-else />
    </div>
    <div class="row items-center justify-evenly text-white">Home</div>
  </q-page>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

import { Options } from './model';

import NavbarVue from './components/Navbar.vue';
import SearchPlace from 'src/pages/home/components/SearchPlace.vue';
import SearchExperience from 'src/pages/home/components/SearchExperience.vue';

const optionSelected: Ref<Options> = ref(Options.PLACE_TO_STAY);

</script>
<style lang="scss">
</style>
