<template>
  <!-- Root element of the feature card component -->
  <div class="feature-card">
    <!-- Image of the feature card. The :src and :alt bindings ensure the image source and alternative text are reactive -->
    <div class="feature-card-image">
      <img :src="imageSrc" :alt="title" />
    </div>
    <div class="feature-card-content">
      <h3 class="feature-card-title">{{ title }}</h3>

      <p class="feature-card-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

// Define the FeatureCard component using Vue's composition API
export default defineComponent({
  name: 'FeatureCard',
  props: {
    // The title prop, a string that is required for this component to function properly
    title: {
      type: String as PropType<string>,
      required: true
    },
    // The description prop, a string that is required for this component to function properly
    description: {
      type: String as PropType<string>,
      required: true
    },
    // The imageSrc prop, a string representing the image URL and is required for the component
    imageSrc: {
      type: String as PropType<string>,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss'; // Importing variables for consistent styling

// Base styling for the feature card container
.feature-card {
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// Styling for the image within the feature card
.feature-card-image {
  width: 180px;
  height: 180px;
  overflow: hidden;
  /* This ensures that the overflow from the scaled image is not visible */
  display: flex;
  /* Centering the image if needed */
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.feature-card-image img {
  display: block;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  /* Smooth transition for the transform */
}

.feature-card-image:hover img {
  transform: scale(1.1);
}

// Styling for the content area of the feature card
.feature-card-content {
  padding: var(--spacing-medium);
  text-align: center;
}

// Styling for the title within the feature card
.feature-card-title {
  font-size: var(--font-size-large);
  margin-bottom: var(--spacing-medium);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 1px;
}

// Styling for the description within the feature card
.feature-card-description {
  font-size: var(--font-size-base);
  color: var(--color-secondary);
}

// Media query for styles specific to screens smaller than 768px
@media (max-width: $breakpoint-md) {
  .feature-card {
    margin-bottom: var(--spacing-xl);
  }
}
</style>
