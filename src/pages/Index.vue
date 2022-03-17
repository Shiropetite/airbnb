<template>
  <q-page class="bg-black">
    <div class="middle row justify-center text-white">
      <div
        class="row justify-center"
        :class="optionSelected === 'place_to_stay' ? 'selected' : 'line-btn'"
      >
        <q-btn
          class="col-12 no-hover"
          :label="$t('place_to_stay')"
          @click="updateOption('place_to_stay')"
          rounded
          no-caps
          flat
        />
        <div class="line"></div>
      </div>

      <div
        class="row justify-center"
        :class="optionSelected === 'experiences' ? 'selected' : 'line-btn'"
      >
        <q-btn
          class="col-12 no-hover"
          :label="$t('experiences')"
          @click="updateOption('experiences')"
          rounded
          no-caps
          flat
        />
        <div class="line"></div>
      </div>

      <div class="line-btn row justify-center">
        <!--  to="/s/experiences/online" -->
        <q-btn class="col-12 no-hover" :label="$t('online_experiences')" rounded no-caps flat />
        <div class="line"></div>
      </div>
    </div>

    <div class="row justify-center">
      <search-place v-if="optionSelected === 'place_to_stay'" />
      <search-experience v-else />
    </div>
    <div class="row items-center justify-evenly text-white">Home</div>
  </q-page>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import SearchPlace from 'src/components/SearchPlace.vue';
import SearchExperience from 'src/components/SearchExperience.vue';

const optionSelected: Ref<String> = ref('place_to_stay')

const updateOption = (newOption: string) => {
  optionSelected.value = newOption;
}
</script>
<style lang="scss">
.middle {
  position: absolute;
  top: -62px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  z-index: 9999;
}

.line {
  height: 2px;
  width: 10px;
  transition: all linear 0.5s;
}

.selected {
  .line {
    background-color: white;
    width: 20px;
  }
}

.line-btn {
  button:hover,
  a:hover {
    transition: all linear 0.3s;
    color: rgb(182, 182, 182);
  }

  button:hover ~ .line,
  a:hover ~ .line {
    background-color: white;
    width: 10px;
  }
}
</style>
