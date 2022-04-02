<template>
  <q-header class="gt-xs home-header">
    <q-toolbar>
      <q-btn class="no-hover q-py-md" to="/" rounded no-caps flat>
        <q-img class="gt-md" src="logo-white.png" height="32px" width="103.5px" />
        <q-img class="lt-lg" src="logo-small-white.png" height="34px" width="31.5px" />
      </q-btn>

      <q-space />

      <!-- to="/host/homes" -->
      <q-btn class="host-btn" :label="$t('become_host')" rounded no-caps flat />

      <q-btn
        class="language-btn q-mr-sm"
        icon="language"
        size="md"
        @click="chooseLanguage()"
        round
        no-caps
        flat
      />

      <q-btn-dropdown
        class="account-btn no-hover text-black"
        color="white"
        icon="menu"
        dropdown-icon="account_circle"
        no-icon-animation
        rounded
        no-caps
        dense
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

// Components
import LangDialog from 'src/components/LangDialog.vue';

const chooseLanguage = () => {
  Dialog.create({
    component: LangDialog,
  })
}
</script>

<style lang="scss">
.home-header {
  background-color: black;

  .q-toolbar {
    height: 80px;
    padding: 0 7%;

    @media (min-width: $breakpoint-lg-min) and (max-width: $breakpoint-lg-max) {
      padding: 0 70px;
    }

    @media (min-width: $breakpoint-md-min) and (max-width: $breakpoint-md-max) {
      padding: 0 32px;
    }

    @media (max-width: $breakpoint-sm-max) {
      padding: 0 26px;
    }

    .host-btn {
      font-weight: 500 !important;
      font-size: 14px;
    }

    .account-btn {
      font-size: 14px;
      padding: 6px 4px 6px 10px;

      .q-btn-dropdown__arrow {
        font-size: 34px !important;
        color: grey;
      }

      .q-icon {
        font-size: 20px;
      }
    }
  }
}
</style>
