<template>
  <q-dialog ref="dialogRef">
    <q-card class="lang-dialog" style="border-radius: 12px">
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
              <div class="subtitle">{{ language.country }}</div>
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

  .q-item {
    min-width: 180px;
    border-radius: 12px;
  }

  .selected {
    border: solid 1px black;
  }
}
</style>
