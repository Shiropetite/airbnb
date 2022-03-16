<template>
  <q-dialog ref="dialogRef">
    <q-card class="lang-dialog">
      <q-card-section>
        <q-btn icon="close" @click="onDialogCancel()" round flat />
      </q-card-section>
      <q-card-section>
        <h2>{{ $t('choose_language') }}</h2>

        <div class="row justify-around">
          <q-item
            v-for="language in localeOptions"
            class="q-pa-sm"
            :class="locale === language.value ? 'selected' : ''"
            @click="assign(language.value)"
            :clickable="locale !== language.value"
            flat
          >
            <div>
              <div>{{ language.label }}</div>
              <div class="text-subtitle">{{ language.country }}</div>
            </div>
          </q-item>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
import { useDialogPluginComponent } from 'quasar';
import { useI18n } from 'vue-i18n';

const { dialogRef, onDialogCancel } = useDialogPluginComponent();
const { locale } = useI18n({ useScope: 'global' })

console.log(locale.value)

const localeOptions = [
  { value: 'fr-FR', label: 'Français', country: 'France' },
  { value: 'en-US', label: 'English', country: 'United States' },
]

const assign = (value: string) => {
  locale.value = value
}
</script>

<style lang="scss">
.lang-dialog {
  color: #222222;
  width: 100%;
  border-radius: 12px;

  h2 {
    font-size: 26px;
    font-weight: 500 !important;
    margin: 0px !important;
    padding: 0px !important;
  }

  .q-item {
    min-width: 180px;
    border-radius: 12px;
  }

  .selected {
    border: solid 1px black;
  }

  .text-subtitle {
    color: #717171;
  }
}
</style>
