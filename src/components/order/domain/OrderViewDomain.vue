<script>
import OrderFeature from "@/components/order/OrderFeature.vue";
import OrderPass from "@/components/order/OrderPass.vue";
import Search from "@/components/order/domain/OrderSearchDomain.vue";
import OrderTransfer from "@/components/order/domain/OrderTransfer.vue";
import OrderCartDomain from "@/components/order/domain/OrderCartDomain.vue";

import BaseContainer from "@/components/UI/BaseContainer.vue";
import BaseLogo from "@/components/UI/BaseLogo.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";
import {gsap} from 'gsap';
import {OrderType} from "@/enums/order.js";

export default {
  name: "OrderViewDomain",
  components: {
    BaseLogo,
    BaseContainer,
    BaseButton,
    OrderFeature,
    OrderPass,
    Search,
    OrderTransfer,
    OrderCartDomain
  },
  data() {
    return {
      store: useOrderStore(),
    }
  },
  mounted() {
    this.$emitter.on('_order_-toggle-cart', this.toggle)

    this.store.getOrdersByCategory(OrderType.DOMAIN).length && this.toggle();
  },
  methods: {
    toggle() {
      const tl = gsap.timeline();
      const {first, second} = this.store.getOrdersByCategory(OrderType.DOMAIN).length ? {
        first: '.transfer',
        second: '.cart'
      } : {
        first: '.cart',
        second: '.transfer'
      };

      tl.to(first, {opacity: 0, y: '25%', duration: 0.25})
          .set(first, {display: 'none'})
          .set(second, {display: 'block', opacity: 0, y: '25%'})
          .to(second, {y: '0%', opacity: 1, duration: 0.25})
          .play();
    }
  }
}
</script>

<template>
  <section class="hero">
    <base-container>
      <header class="header">
        <base-logo v2></base-logo>
      </header>

      <order-feature>
        <template #feature>
          <h1>Moving forward, let's configure your domain for you.</h1>
          <h3>
            Your domain serves as your website's address.<br/>You have the option to generate a new domain, utilize
            an existing <br/>one, or decide on one later.
          </h3>
        </template>
      </order-feature>

      <div class="domains">
        <ul class="domains__group">
          <Search></Search>
          <order-transfer class="transfer"></order-transfer>
          <order-cart-domain class="cart"></order-cart-domain>
        </ul>
      </div>
    </base-container>
  </section>

  <order-pass>
    <template #pass>
      <h2 class="order-pass-title">Alternatively, you have the option to bypass this step and generate <br/>a domain at
        a later time.</h2>
      <router-link to="/order/hosting" class="order-pass-link">I'll generate my domain at a later time ></router-link>
    </template>
  </order-pass>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.order-pass-title {
  @include fluid-type($text-lg, $text-2xl, 500, $gray-200);
}

.order-pass-link {
  @include fluid-type($text-xl, $text-4xl, 700, $blue-100);
  display: block;
  margin-top: 0.938rem;
}

.hero {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 152, 255, 1) 500px, rgba(255, 255, 255, 1) 500px);

  .container {
    height: 100%;

    .header {
      @include center;
      padding: 2rem 0;
    }

    .hero-text {
      margin-top: 3.125rem;
      text-align: center;

      h1 {
        @include fluid-type($text-2xl, $text-4xl, 700, $white-100);
      }

      h3 {
        @include fluid-type($text-base, $text-2xl, 500, $white-100);
        margin-top: 1.875rem;
      }
    }

    .domains {
      width: 100%;
      margin-top: 5rem;

      &__group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
        @media screen and (max-width: 1100px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>