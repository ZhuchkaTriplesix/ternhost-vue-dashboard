<script>
import BaseButton from "@/components/UI/BaseButton.vue";

import {useFakeDomains} from "@/static/domains.js";
import {v4 as uuidv4} from "uuid";

export default {
  name: "OrderDomainSearchInput",
  components: {
    BaseButton
  },
  data() {
    return {
      root: ""
    }
  },
  methods: {
    getDomains() {
      this.$emitter.emit('_order_-switch-preloader', true);

      const domains = useFakeDomains();

      if (domains) {
        setTimeout(() => {
          const syncDomains = domains.map((domain) => {
            return {...domain, root: this.root, uuid: uuidv4(), activeAge: domain.ages[0]}
          });

          this.$emitter.emit('_order_-set-domains', syncDomains);
          this.$emitter.emit('_order_-switch-preloader', false);
        }, 500);
      }
    },
  }
}
</script>

<template>
  <div class="domains__group-item__body">
    <div class="search-domain">
      <input type="text" placeholder="Search your domain..." v-model="this.root"/>
      <base-button class="btn-secondary" @click="this.getDomains">Search</base-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.domains__group-item__body {
  .search-domain {
    display: flex;
    justify-content: space-between;
    background-color: $white-200;
    border-radius: 0.313rem;

    input {
      @include fluid-type($text-sm, $text-base, $color: $gray-200);
      padding: 1.063rem;
      background-color: transparent;
      flex-grow: 1;
    }

    button {
      display: flex;
      align-items: center;
      @media screen and (max-width: 500px) {
        padding: 0 0.5rem;
      }

      span {
        @include fluid-type($text-sm, $text-base);
      }

      .icon {
        margin-left: 1rem;
      }
    }
  }

  p {
    @include fluid-type($text-sm, $text-base, $color: $gray-200);
    margin-top: 2.5rem;
  }

  .orders {
    &__item {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
      padding: 1rem 0;
      @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        &:first-child {
          border-top: 0;
        }
        border-top: 0.063rem solid $white-7;
      }

      &-domain {
        @include center-y;

        h3 {
          @include fluid-type($text-sm, $text-base, 500, $gray-200);
        }
      }

      &-age {
        &__active {
          @include center-y-between;
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.25rem;
          border: 0.063rem solid $gray-200;
          cursor: pointer;

          h3 {
            @include fluid-type($text-sm, $text-base, 500, $gray-200);
          }

          .icon {
            color: $gray-200;
          }
        }
      }

      &-price {
        text-align: right;

        h3 {
          @include fluid-type($text-xs, $text-xs, 500, $gray-200);
          text-decoration: line-through;
        }

        h1 {
          @include fluid-type($text-base, $text-lg, 700, $blue-200);
          margin-top: 0.25rem;
        }
      }
    }
  }

  .orders-empty {
    margin-bottom: 1rem;

    p {
      @include fluid-type($text-sm, $text-xl, 500, $gray-200);
    }
  }
}
</style>