<template>
  <q-item>
    <q-item-section>
      <div class="row justify-between">
        <slot name="text">
          <div>
            <div class="label">{{ $t(itemName) }}</div>
            <div class="subtitle">{{ $t(`${itemName}_subtitle`) }}</div>
          </div>
        </slot>
        <div>
          <div class="row items-center">
            <q-btn
              v-if="disableMinusBtn()"
              icon="remove"
              @click="removeItem()"
              round
              outline
              dense
            />
            <div class="q-pa-md">{{ nbItem }}</div>
            <q-btn icon="add" @click="addItem()" round outline dense />
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>
<script lang="ts" setup>

const props = defineProps<{
  itemName: string,
  nbItem: number,
  disableMinusBtn: () => boolean,
  removeItem: () => void,
  addItem: () => void
}>()

</script>
