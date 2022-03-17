<template>
  <div class="search bg-white">
    <div class="row justify-center">
      <div class="input" style="width: 260px">
        <div class="label">{{ $t('location') }}</div>
        <input v-model="destination" :placeholder="$t('location_placeholder')" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">{{ $t('check_in') }}</div>
        <input v-model="destination" :placeholder="$t('check_in_out_placeholder')" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">{{ $t('check_out') }}</div>
        <input v-model="destination" :placeholder="$t('check_in_out_placeholder')" />
      </div>

      <q-separator class="q-my-md" size="sm" color="$grey" vertical />

      <div class="col input">
        <div class="label">{{ $t('guests') }}</div>
        <input v-model="destination" :placeholder="$t('guests_placeholder')" />
      </div>

      <div class="row items-center q-mr-sm">
        <q-btn
          style="font-size: 16px; font-weight: 500; letter-spacing: 0.5px;"
          class="q-py-sm"
          icon="search"
          :label="$t('search')"
          color="primary"
          rounded
          no-caps
        />
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
