<template>
  <div
  v-if="isSelected"
  class="tab-item"
  role="tabpanel"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean
    }
  }
}
</script>
