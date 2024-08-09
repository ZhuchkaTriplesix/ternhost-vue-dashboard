<template>
  <section class="pricing" id="pricing">
    <base-container>
      <base-title>Our Flexible Plan</base-title>

      <div class="pricing-body">
        <div class="pricing__time">
          <tern-offer-durations :durations="this.offerDurations"></tern-offer-durations>
        </div>

        <div class="pricing__plans">
          <ul class="pricing__plans-group" ref="offers">
            <tern-offer
              v-for="offer in this.offers"
              :key="offer.id"
              :offer="offer"
              :activeDuration="this.getActiveOfferDuration()"
              :isBest="offer.id === 2"
            ></tern-offer>
          </ul>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseTitle from '@/components/UI/BaseTitle.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import TernOfferDurations from '@/components/tern/TernOfferDurations.vue';
import TernOffer from '@/components/tern/TernOffer.vue';

import { useLoadOffers } from '@/hooks/useLoadOffers.js';
import { offersMixin } from '@/mixins/offers.js';

export default {
  name: 'HomeOffers',
  components: {
    BaseContainer,
    BaseTitle,
    BaseButton,
    TernOfferDurations,
    TernOffer,
  },
  mixins: [offersMixin],
  data() {
    return {
      offerDurations: [
        { id: 0, value: 12, isActive: true },
        { id: 1, value: 36, isActive: false },
      ],
      offers: [],
    };
  },
  mounted() {
    this.offers = useLoadOffers('home');
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.pricing {
  padding: 9.375rem 0;
  .container {
    .pricing-header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .pricing-body {
      @include center-col;
      .pricing__time {
        margin: 3rem 0;
      }
      .pricing__plans {
        width: 100%;
        &-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media screen and (max-width: 500px) {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      }
    }
  }
}
</style>
