<template>
  <!-- Displays a header/title, using a prop for the content -->
  <h1 class="header">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  props: {
    // The title content, required for the component
    title: {
      type: String as PropType<string>,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
// Importing design tokens for consistent styling
@import '@/assets/variables.scss';

.header {
  // Base styling for header
  color: var(--color-primary);
  padding-bottom: var(--spacing-3xl);
  text-align: center;
  font-weight: bold;
  font-size: var(--font-size-3xl);
}

// Responsive styling for smaller screens
@media (max-width: $breakpoint-md) {
  .header {
    // Adjusting font size for better readability on small screens
    font-size: calc(var(--font-size-3xl) / 1.5);
  }
}
</style>
