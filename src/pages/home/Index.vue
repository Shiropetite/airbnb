<template>
  <q-page class="bg-black">
    <navbar v-model="optionSelected" />

    <div class="row justify-center">
      <search-place v-if="optionSelected === 'place-to-stay'" />
      <search-experience v-else />
    </div>
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
import SearchPlace from 'src/pages/home/components/SearchPlace.vue';
import SearchExperience from 'src/pages/home/components/SearchExperience.vue';

const optionSelected: Ref<Options> = ref(Options.PLACE_TO_STAY);

</script>
<style lang="scss">
</style>
