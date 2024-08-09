<script>
import Offer from "@/components/tern/TernOffer.vue";
import OfferDurations from "@/components/tern/TernOfferDurations.vue";

import {offersMixin} from "@/mixins/offers.js";
import {useOrderStore} from "@/stores/useOrderStore.js";
import {OrderType} from "@/enums/order.js";

import {useLoadOffers} from "@/hooks/useLoadOffers.js";
import {v4 as uuidv4} from "uuid";

export default {
  name: "OrderHostingPlans",
  components: {
    OfferDurations,
    Offer
  },
  mixins: [offersMixin],
  data() {
    return {
      store: useOrderStore(),
      offerDurations: [
        {id: 0, value: 1, isActive: false},
        {id: 1, value: 12, isActive: true},
        {id: 2, value: 36, isActive: false},
        {id: 3, value: 48, isActive: false},
      ],
      offers: [],
    }
  },
  mounted() {
    this.offers = useLoadOffers('order-hosting');
  },
  methods: {
    buy(offer) {
      const activeAge = offer.prices.filter((price) => price.duration === this.getActiveOfferDuration())[0];
      const entity = {...offer, uuid: uuidv4(), type: OrderType.HOSTING, activeAge};

      this.store.buy(entity);
    }
  }
}
</script>

<template>
  <div class="plans">
    <div class="plans__time">
      <offer-durations :durations="this.offerDurations" class="order-hosting"></offer-durations>
    </div>

    <div class="plans__box">
      <ul class="offers" ref="offers">
        <Offer
            v-for="offer in this.offers"
            :key="offer.id"
            :offer="offer"
            :activeDuration="this.getActiveOfferDuration()"
            :isBest="offer.id === 5"
            :callback="this.buy"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.plans {
  @include center-col;
  margin-top: 3rem;

  &__box {
    width: 100%;
    margin-top: 1.875rem;
    border-radius: 1.875rem;
    background-color: $white-100;
    padding: 1rem;
    box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);

    .offers {
      width: auto;
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
</style>