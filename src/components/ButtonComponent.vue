<template>
  <!-- Reusable button component with dynamic styling based on `buttonType` -->
  <button class="button" :class="buttonType" @click="handleClick">
    <!-- Slot for button label allows for flexible content -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    // Optional prop for additional styling classes
    buttonType: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: ['click'],
  methods: {
    // Emits a 'click' event to parent components
    handleClick(event: Event) {
      this.$emit('click', event)
    }
  }
})
</script>

<style scoped lang="scss">
// Importing design tokens for consistent styling
@import '@/assets/variables.scss';

.button {
  // Base styling for button
  cursor: pointer;
  border: 1.5px solid var(--color-primary);
  border-radius: var(--border-radius);
  background-color: transparent;
  padding: 10px var(--spacing-large);
  font-size: var(--font-size-base);
  font-weight: 300;
  margin-top: var(--spacing-3xl);
}

.button:hover {
  // Hover state styling for button
  background-color: var(--color-primary);
  color: var(--color-background);
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

// Responsive styling for smaller screens
@media (max-width: $breakpoint-md) {
  .button {
    font-size: var(--font-size-large);
    margin-top: var(--spacing-small);
  }
}
</style>
