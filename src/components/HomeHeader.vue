<template>
  <q-header class="home-header">
    <q-toolbar class="bg-black">
      <q-btn class="no-hover" rounded no-caps flat>
        <q-img src="logo.svg" height="32px" width="102px" />
      </q-btn>

      <q-space />

      <div class="selected row justify-center">
        <q-btn class="col-12 no-hover" label="Hébergements" rounded no-caps flat />
        <div class="line"></div>
      </div>

      <div class="line-btn row justify-center">
        <q-btn class="col-12 no-hover" label="Expériences" rounded no-caps flat />
        <div class="line"></div>
      </div>

      <div class="line-btn row justify-center">
        <q-btn class="col-12 no-hover" label="Expériences en ligne" rounded no-caps flat />
        <div class="line"></div>
      </div>

      <q-space />

      <q-btn label="Devenez hôte" rounded no-caps flat />

      <q-btn class="q-mr-sm" icon="language" round no-caps flat />

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
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Inscription</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Connexion</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Heberger des voyageurs</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Créer une expérience</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>Aide</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.home-header {
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
      border: solid 1px black;
      transition: all linear 0.5s;
    }

    .selected {
      .line {
        background-color: white;
        border-color: white;
        width: 20px;
      }
    }

    .line-btn {
      button:hover {
        transition: all linear 0.3s;
        color: rgb(182, 182, 182);
      }

      button:hover ~ .line {
        background-color: white;
        border-color: white;
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
