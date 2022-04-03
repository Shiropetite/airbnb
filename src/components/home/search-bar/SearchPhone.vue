<template>
  <div class="search-phone">
    <q-btn no-caps>
      <q-icon class="q-mr-xs" name="search" color="primary" size="sm" />
      <div>Où allez-vous ?</div>
    </q-btn>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.search-phone {
  .q-btn {
    background-color: white;
    border: solid 1px white;
    border-radius: 24px;
    height: 48px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
