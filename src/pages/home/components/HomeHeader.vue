<template>
  <q-header class="home-header">
    <q-toolbar class="bg-black">
      <q-btn class="no-hover q-py-md" to="/" rounded no-caps flat>
        <q-img src="logo.svg" height="32px" width="102px" />
      </q-btn>

      <q-space />

      <!-- to="/host/homes" -->
      <q-btn :label="$t('become_host')" rounded no-caps flat />

      <q-btn class="q-mr-sm" icon="language" @click="chooseLanguage()" round no-caps flat />

      <q-btn-dropdown
        class="account-btn text-black"
        color="white"
        icon="menu"
        dropdown-icon="account_circle"
        no-icon-animation
        rounded
        no-caps
      >
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>{{ $t('sign_up') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>{{ $t('log_in') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <!-- to="/host/homes" -->
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>{{ $t('host_home') }}</q-item-label>
            </q-item-section>
          </q-item>

          <!-- to="/host/experiences?from_nav=1" -->
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>{{ $t('host_experience') }}</q-item-label>
            </q-item-section>
          </q-item>

          <!-- to="/help" -->
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>{{ $t('help') }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { Dialog } from 'quasar';
import LangDialog from 'src/components/LangDialog.vue';

const chooseLanguage = () => {
  Dialog.create({
    component: LangDialog,
  })
}
</script>

<style lang="scss">
.home-header {
  .q-toolbar {
    height: 80px;
    padding: 0 136px;

    @media (max-width: $breakpoint-lg-max) {
      padding: 0 64px;
    }
  }

  .account-btn {
    img {
      border-radius: 100%;
    }
  }
}
</style>
