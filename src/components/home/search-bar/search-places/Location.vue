<template>
  <q-input
    class="location"
    v-model="destination"
    :label="$t('location')"
    :placeholder="$t('location_placeholder')"
    @focus="isOpen = true"
    color="black"
    stack-label
    borderless
  >
    <q-menu v-model="isOpen" class="search-menu location-menu">
      <div class="container">
        <div class="text">Partir n'importe où, n'importe quand</div>
        <q-btn align="left" label="Je suis flexible" icon-right="navigate_next" rounded no-caps />
      </div>
    </q-menu>
  </q-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const destination = ref("");
const isOpen = ref(false);
</script>

<style lang="scss">
.search-place {
  .q-field {
    padding: 0 30px;
  }

  .q-field__label {
    color: black;
    font-weight: 500;
    font-size: 16px !important;
    letter-spacing: 1px;
  }
}

.q-menu.location-menu {
  padding: 16px 32px !important;
  position: relative;
  color: #222;

  .container {
    width: 330px;
  }

  .text {
    padding: 8px 0;
  }

  .q-btn {
    margin: 20px 0px;
    padding: 10px 30px;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px !important;
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    transition: box-shadow linear 0.2s;

    .block {
      background: linear-gradient(
        90deg,
        rgb(111, 1, 156) 0%,
        rgb(198, 1, 126) 135.12%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .q-focus-helper {
    visibility: hidden;
  }

  .q-btn:hover {
    box-shadow: rgb(0 0 0 / 25%) 0px 6px 16px !important;
  }

  .q-icon {
    text-align: right;
    background: linear-gradient(
      90deg,
      rgb(111, 1, 156) 0%,
      rgb(198, 1, 126) 135.12%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
