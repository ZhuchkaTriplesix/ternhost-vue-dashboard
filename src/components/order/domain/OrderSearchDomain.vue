<script>
import BaseButton from "@/components/UI/BaseButton.vue";

import Input from "@/components/order/domain/OrderSearchDomainInput.vue";
import Preloader from "@/components/order/domain/OrderSearchDomainPreloader.vue";
import Catalog from "@/components/order/domain/OrderSearchDomainCatalog.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderDomainSearch",
  components: {
    BaseButton,
    Input,
    Preloader,
    Catalog
  },
  data() {
    return {
      store: useOrderStore(),
      domains: [],
      isPreloading: false,
    }
  },
  mounted() {
    this.$emitter.on("_order_-set-domains", (domains) => this.setDomains(domains));
    this.$emitter.on("_order_-switch-preloader", (state) => this.switch(state))
  },
  methods: {
    setDomains(domains) {
      this.domains = domains;
    },
    switch(state) {
      this.isPreloading = state;
    }
  }
}
</script>

<template>
  <li class="domains__group-item domains-list">
    <header class="domains__group-item__header">
      <h1>Search Your Domain Now</h1>
    </header>

    <Input/>
    <Preloader v-if="this.isPreloading"/>

    <div v-else>
      <p class="lol" v-if="!this.domains.length">
        Become the owner of a stylish and memorable domain that will be your digital reflection. Don't miss
        the opportunity to stand out from the crowd – acquire your unique domain right now with a special
        offer.
      </p>

      <Catalog :domains="this.domains"/>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.lol {
  @include fluid-type($text-sm, $text-base, $color: $gray-200);
  margin-top: 2.5rem;
}

.domains__group-item {
  padding: 2.188rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  max-width: 31.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  margin: 0 auto;
  align-self: flex-start;

  &.order {
    padding: 0;
    display: flex;
    flex-direction: column;

    .domains__group-item__header {
      padding: 2.188rem 2.188rem 0 2.188rem;
      @media screen and (max-width: 500px) {
        padding: 1rem 1rem 0 1rem;
      }
    }

    .domains__group-item__body {
      padding: 0 2.188rem;
      @media screen and (max-width: 500px) {
        padding: 0 1rem;
      }
    }

    .domains__group-item__footer {
      padding-bottom: 2.188rem;
      margin-top: auto;
      border-top: 0.063rem solid $white-7;

      .top {
        margin: 2.188rem 2.188rem 0 2.188rem;
        @media screen and (max-width: 500px) {
          margin: 1rem 1rem 0 1rem;
        }
      }

      .promocode {
        margin: 2rem 2.188rem;
        @media screen and (max-width: 500px) {
          margin: 1rem;
        }
      }

      .continue {
        margin: 0 2.188rem;
        @media screen and (max-width: 500px) {
          margin: 0 1rem;
        }
      }
    }
  }

  &.domains-list {
    .domains__group-item__body {
      margin: 2.5rem 0;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    border-radius: 1rem;
  }

  &__header {
    h1 {
      @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
    }
  }

  &__footer {
    h3 {
      @include fluid-type($text-base, $text-base, 500, $blue-200);
      text-align: center;
      margin-top: 1rem;
    }

    .top {
      @include center-y-between;

      h1 {
        @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
      }

      .total-price {
        @include center-y;

        h1 {
          &:first-child {
            @include fluid-type($text-xl, $text-3xl, $color: $gray-200);
            margin-right: 0.5rem;
            text-decoration: line-through;
          }
        }
      }
    }

    .promocode {
      border-radius: 0.25rem;
      border: 0.125rem solid $gray-200;
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;

      input {
        @include fluid-type($text-base, $text-base, $color: $gray-200);
        padding: 0 1rem;
      }

      button {
        background-color: $gray-200;
        padding: 1rem;
        color: $white-100;
      }
    }

    .continue {
      button {
        width: 100%;
      }
    }
  }
}
</style>