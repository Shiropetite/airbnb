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

const destination = ref("");

</script>

