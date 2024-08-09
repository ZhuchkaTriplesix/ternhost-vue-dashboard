<template>
  <section class="hero">
    <base-container>
      <header class="hero__header">
        <h1>Choose Your Web Hosting Plan</h1>
      </header>

      <div class="plans">
        <div class="plans__time">
          <tern-offer-durations :durations="this.offerDurations" class="reverse"></tern-offer-durations>
        </div>
        <div class="plans__box">
          <ul class="offers" ref="offers">
            <tern-offer
              v-for="offer in this.offers"
              :key="offer.id"
              :offer="offer"
              :activeDuration="this.getActiveOfferDuration()"
              :isBest="offer.id === 6"
            ></tern-offer>
          </ul>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import TernOfferDurations from '@/components/tern/TernOfferDurations.vue';
import TernOffer from '@/components/tern/TernOffer.vue';

import { useLoadOffers } from '@/hooks/useLoadOffers.js';
import { offersMixin } from '@/mixins/offers.js';

export default {
  name: 'HostingHero',
  components: {
    BaseContainer,
    BaseButton,
    TernOffer,
    TernOfferDurations,
  },
  mixins: [offersMixin],
  data() {
    return {
      offerDurations: [
        { id: 0, value: 1, isActive: false },
        { id: 1, value: 12, isActive: true },
        { id: 2, value: 36, isActive: false },
        { id: 3, value: 48, isActive: false },
      ],
      offers: [],
    };
  },
  mounted() {
    this.offers = useLoadOffers('hosting');
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  @include center;
  min-height: 100vh;
  .container {
    margin-top: 10rem;
    .hero__header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .plans {
      @include center-col;
      margin-top: 3rem;
      &__box {
        width: 100%;
        margin-top: 5rem;
        background-color: $white-100;
        .offers {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
          }
          @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
}
</style>
