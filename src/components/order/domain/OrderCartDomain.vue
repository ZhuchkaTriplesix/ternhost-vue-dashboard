<script>
import BaseButton from "@/components/UI/BaseButton.vue";

import CartPromo from "@/components/order/OrderPromo.vue";
import CartList from "@/components/order/domain/OrderCartDomainList.vue";
import CartTotal from "@/components/order/domain/OrderCartDomainTotal.vue";

export default {
  name: "OrderDomainCart",
  components: {
    BaseButton,
    CartPromo,
    CartList,
    CartTotal,
  },
}
</script>

<template>
  <li class="domains__group-item order">
    <header class="domains__group-item__header">
      <h1>You Order</h1>
    </header>
    <div class="domains__group-item__body">
      <cart-list></cart-list>
    </div>
    <footer class="domains__group-item__footer">
      <cart-total></cart-total>
      <cart-promo></cart-promo>

      <div class="continue">
        <router-link to="/order/hosting">
          <base-button class="btn-secondary">Continue</base-button>
        </router-link>
      </div>
    </footer>
  </li>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

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
    display: none;

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

  &__body {
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

    .orders-empty {
      margin-bottom: 1rem;

      p {
        @include fluid-type($text-sm, $text-xl, 500, $gray-200);
      }
    }
  }

  &__footer {
    h3 {
      @include fluid-type($text-base, $text-base, 500, $blue-200);
      text-align: center;
      margin-top: 1rem;
    }

    .continue {
      button {
        width: 100%;
      }
    }
  }

  .catalog {
    &__group {
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
          .catalog__buy,
          .catalog__sell {
            @include center;
            margin-left: 1.25rem;
            width: 2rem;
            aspect-ratio: 1 / 1;
          }

          .catalog__basket {
            border-radius: 0.25rem;
            background-color: rgba($gray-200, 0.1);

            .icon {
              color: $gray-200;
            }
          }

          .catalog__buy {
            .icon {
              color: $green-2;
              font-size: 1.25rem;
            }
          }

          .catalog__sell {
            .icon {
              color: $red-1;
              font-size: 1.25rem;
            }
          }
        }
      }
    }
  }
}
</style>