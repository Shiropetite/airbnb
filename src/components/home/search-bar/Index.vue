<template>
  <div class="gt-xs row justify-center">
    <search-place v-if="modelValue === 'place-to-stay'" />
    <search-experience v-else />
  </div>

  <search-phone class="lt-sm" />
</template>

<script lang="ts" setup>
// Model
import { Options } from 'src/models/search';

import SearchPlace from './search-places/Index.vue';
import SearchExperience from './SearchExperience.vue';
import SearchPhone from './SearchPhone.vue';

defineProps<{
  modelValue: Options
}>()

</script>
