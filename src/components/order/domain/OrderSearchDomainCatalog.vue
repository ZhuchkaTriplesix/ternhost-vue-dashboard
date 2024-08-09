<script>
import {useOrderStore} from "@/stores/useOrderStore.js";
import {OrderType} from "@/enums/order.js";

export default {
  name: "OrderSearchDomainCatalog",
  props: {
    domains: Object
  },
  data() {
    return {
      store: useOrderStore(),
    }
  },
  methods: {
    buy(entity) {
      this.store.buy({...entity, type: OrderType.DOMAIN});
      this.store.getOrdersByCategory(OrderType.DOMAIN).length === 1 && this.$emitter.emit('_order_-toggle-cart');
    },
    sell(entity) {
      this.store.sell({...entity, type: OrderType.DOMAIN});
      this.store.getOrdersByCategory(OrderType.DOMAIN).length === 0 && this.$emitter.emit('_order_-toggle-cart');
    }
  }
}
</script>

<template>
  <div class="catalog" v-if="this.domains.length">
    <ul class="catalog__group">
      <li class="catalog__group-item" v-for="domain in this.domains" :key="domain.uuid">
        <h3>{{ domain.root }}{{ domain.tld }}</h3>
        <div class="catalog__group-item__box">
          <div class="catalog__price">
            <h3>${{ domain.ages[0].price }}/yr.</h3>
            <h1>${{ this.$discount(domain.ages[0].price, domain.ages[0].discount) }}/yr.</h1>
          </div>
          <div class="catalog__basket" @click="this.buy(domain)" :class="{hidden: this.store.isPurchased(domain)}">
            <font-awesome-icon
                icon="fa-solid fa-basket-shopping"
                class="icon"
                :class="{hidden: this.store.isPurchased(domain)}"/>
          </div>
          <div class="catalog__actions" :class="{hidden: !this.store.isPurchased(domain)}">
            <font-awesome-icon icon="fa-solid fa-check" class="icon buy"></font-awesome-icon>
            <font-awesome-icon icon="fa-solid fa-xmark" class="icon sell" @click="this.sell(domain)"></font-awesome-icon>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.catalog {
  &__group {
    max-height: 478px;
    overflow-y: scroll;
    

    &-item {
      @include center-y-between;
      border: 0.063rem solid $white-200;
      border-bottom: 0;
      padding: 1rem;

      &:last-child {
        border-bottom: 0.063rem solid $white-200;
      }

      h3 {
        @include fluid-type($text-sm, $text-base, 500, $gray-200);
      }

      &__box {
        @include center-y;

        .catalog__price {
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

        .catalog__basket,
        .catalog__actions {
          @include center;
          margin-left: 1.25rem;
          width: 2rem;
          aspect-ratio: 1 / 1;
          cursor: pointer;
        }

        .catalog__basket {
          border-radius: 0.25rem;
          background-color: rgba($gray-200, 0.1);

          .icon {
            color: $gray-200;

          }
        }

        .catalog__actions {
          &:hover {
            .icon.buy {
              display: none;
            }

            .icon.sell {
              display: block;
            }
          }

          .icon {
            font-size: 1.25rem;

            &.buy {
              color: $green-2;
            }

            &.sell {
              color: $red-1;
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>