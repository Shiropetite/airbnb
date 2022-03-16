<template>
  <q-header class="home-header">
    <q-toolbar class="bg-black">
      <q-btn class="no-hover" rounded no-caps flat>
        <q-img src="logo.svg" height="32px" width="102px" />
      </q-btn>

      <q-space />

      <div class="middle row justify-center">
        <div
          class="row justify-center"
          :class="optionSelected === 'place_to_stay' ? 'selected' : 'line-btn'"
        >
          <q-btn
            class="col-12 no-hover"
            :label="$t('place_to_stay')"
            @click="optionSelected = 'place_to_stay'"
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
            @click="optionSelected = 'experiences'"
            rounded
            no-caps
            flat
          />
          <div class="line"></div>
        </div>

        <div class="line-btn row justify-center">
          <q-btn
            class="col-12 no-hover"
            :label="$t('online_experiences')"
            to="/s/experiences/online"
            rounded
            no-caps
            flat
          />
          <div class="line"></div>
        </div>
      </div>

      <q-space />

      <q-btn :label="$t('become_host')" to="/host/homes" rounded no-caps flat />

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

          <q-item clickable v-close-popup to="/host/homes">
            <q-item-section>
              <q-item-label>{{ $t('host_home') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup to="/host/experiences?from_nav=1">
            <q-item-section>
              <q-item-label>{{ $t('host_experience') }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup to="/help">
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
import { Ref, ref } from 'vue';
import { Dialog } from 'quasar';
import LangDialog from './LangDialog.vue';

const optionSelected: Ref<String> = ref('place_to_stay')

const chooseLanguage = () => {
  Dialog.create({
    component: LangDialog,
  })
}
</script>

<style lang="scss">
.home-header {
  .middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .account-btn {
    img {
      border-radius: 100%;
    }
  }

  .q-toolbar {
    height: 80px;
    padding: 0 140px;

    .q-btn {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }

    .no-hover {
      .q-focus-helper {
        visibility: hidden;
      }
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
  }
}

.q-menu {
  border-radius: 12px !important;
  margin-top: 14px !important;
}
</style>
