<script>
import BaseLogo from "@/components/UI/BaseLogo.vue";
import BaseContainer from "@/components/UI/BaseContainer.vue";

import HostingFeature from "@/components/order/OrderFeature.vue";
import HostingPass from "@/components/order/OrderPass.vue";
import HostingPlans from "@/components/order/hosting/OrderHostingPlans.vue";
import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderViewHosting",
  components: {
    BaseContainer,
    BaseLogo,
    HostingFeature,
    HostingPlans,
    HostingPass,
  },
  data() {
    return {
      store: useOrderStore()
    }
  },
  computed: {
    getPath() {
      return this.store.isEmpty ? '/dashboard' : '/order/pay'
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

      <hosting-feature>
        <template #feature>
          <h1>A Great Domain Needs A Great Website</h1>
          <h3>Incorporate website hosting with your domain and showcase your vision to the world</h3>
        </template>
      </hosting-feature>

      <hosting-plans></hosting-plans>
    </base-container>
  </section>

  <hosting-pass>
    <template #pass>
      <h2 class="order-pass-title">Alternatively, you have the option to bypass this step and generate a domain at a
        later time.</h2>
      <router-link :to="this.getPath" class="order-pass-link">I'll select my hosting at a later time ></router-link>
    </template>
  </hosting-pass>
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
  background: linear-gradient(180deg, rgba(0, 152, 255, 1) 80%, rgba(255, 255, 255, 1) 80%);

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
  }
}
</style>