<template>
  <div class="gt-xs navbar row justify-center">
    <div
      class="row justify-center"
      :class="modelValue === Options.PLACE_TO_STAY ? 'selected' : 'line-btn'"
      data-cy="place-to-stay"
      :style="$q.screen.name === 'md' ? 'width: 140px' : 'width: 150px'"
    >
      <q-btn
        class="col-12"
        :label="$t('place-to-stay')"
        @click="emits('update:modelValue', Options.PLACE_TO_STAY)"
        rounded
        no-caps
        flat
      />
      <div class="line"></div>
    </div>

    <div
      class="row justify-center"
      :class="modelValue === Options.EXPERIENCES ? 'selected' : 'line-btn'"
      data-cy="experiences"
      :style="$q.screen.name === 'md' ? 'width: 80px' : 'width: 120px'"
    >
      <q-btn
        class="col-12"
        :label="$t('experiences')"
        @click="emits('update:modelValue', Options.EXPERIENCES)"
        rounded
        no-caps
        flat
      />
      <div class="line"></div>
    </div>

    <div
      class="line-btn row justify-center"
      :style="$q.screen.name === 'md' ? 'width: 170px' : 'width: 182px'"
    >
      <!--  to="/s/experiences/online" -->
      <q-btn class="col-12 no-hover" :label="$t('online-experiences')" rounded no-caps flat />
      <div class="line"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Options } from 'src/models/search';

defineProps<{ modelValue: Options }>();

const emits = defineEmits<{ (e: 'update:modelValue', value: Options): void }>();
</script>
<style lang="scss">
.navbar {
  position: absolute;
  top: -62px;
  left: 50%;
  width: 50%;
  z-index: 2000;
  transform: translate(-50%, 0);
  color: white;

  .q-btn {
    font-weight: 300 !important;
  }

  @media (min-width: $breakpoint-md-min) and (max-width: $breakpoint-md-max) {
    .q-btn {
      font-size: 14px;
      font-weight: 500 !important;
    }
  }

  @media (min-width: $breakpoint-sm-min) and (max-width: $breakpoint-sm-max) {
    position: relative;
    top: 0;
    width: 100%;
  }

  // remove default quasar hover
  .q-focus-helper {
    visibility: hidden;
  }

  .line {
    height: 2px;
    width: 10px;
    transition: background-color linear 0.5s, width linear 0.2s;
  }

  .selected {
    .line {
      background-color: white;
      width: 18px;
    }
  }

  .line-btn {
    // text style
    button:hover,
    a:hover {
      color: rgb(182, 182, 182);
      transition: all linear 0.3s;
    }

    // line style
    button:hover ~ .line,
    a:hover ~ .line {
      background-color: white;
      width: 4px;
    }
  }
}
</style>
