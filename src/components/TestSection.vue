<template>
  <div class="test-section">
    <div class="l-container">
      <div class="l-row">
        <SectionHeader
          title="Travel with confidence with the leaders in sustainable adventures for over 30 years."
        />
        <div class="feature-cards-container">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :imageSrc="feature.image"
          />
        </div>
        <ButtonComponent class="main-button"> The Intrepid difference </ButtonComponent>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.test-section {
  background-color: #f6f4f0;
  padding: 4rem 0;
}

.feature-cards-container {
  display: flex;
  align-items: center;
  padding-top: var(--spacing-xl);
}

@media screen and (max-width: $breakpoint-md) {
  .feature-cards-container {
    flex-wrap: wrap;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionHeader from '@/components/HeaderComponent.vue' // Ensure correct component path
import FeatureCard from '@/components/FeatureCard.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

// Import images
import flexibleBookingsImage from '@/assets/flexible-bookings.png'
import likeMindedTravellersImage from '@/assets/likeminded-travellers.png'
import rightTripImage from '@/assets/right-trip_0.png'

// Define a TypeScript interface for your features
interface Feature {
  title: string
  description: string
  image: string
}

export default defineComponent({
  name: 'TestSection',
  components: {
    SectionHeader,
    FeatureCard,
    ButtonComponent
  },
  data() {
    return {
      features: [
        {
          title: 'Flexible bookings',
          description:
            "Travel plans change. We get it - and we're here to help! Learn all about our flexible booking options.",
          image: flexibleBookingsImage
        },
        {
          title: 'Like-Minded Travellers',
          description:
            'Connect and share experiences with a community of spirited explorers who care about the planet.',
          image: likeMindedTravellersImage
        },
        {
          title: 'The right trip for you',
          description:
            'Whether near or far from home, your trip will be local led and full of unforgettable experiences, with everything taken care of.',
          image: rightTripImage
        }
      ] as Feature[]
    }
  }
})
</script>
