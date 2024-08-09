<template>
  <li class="pricing__plans-group__item" :class="{ best: isBest }">
    <header class="plan__header">
      <h1>{{ this.offer.title }}</h1>
      <div class="plan__header-price">
        <div class="plan__header-price__row">
          <h3>${{ this.getPrice }}/mo</h3>
          <span>Save {{ this.getDiscount }}%</span>
        </div>

        <h1>${{ this.$getPriceWithDiscount(this.getPrice, this.getDiscount) }}<span>/mo</span></h1>
      </div>
    </header>

    <div class="plan__column">
      <ul class="plan__column-group">
        <li class="plan__column-group__item" v-for="detail in this.offer.details" :key="detail.id">
          <h3>
            {{ detail.value }} <span>{{ detail.field }}</span>
          </h3>
        </li>
      </ul>
    </div>

    <footer class="plan__footer">
      <router-link to="/order/pay" v-if="this.callback">
        <base-button class="btn-primary" @click="this.callback(this.offer)">Select</base-button>
      </router-link>

      <router-link to="/users/signup" v-else>
        <base-button class="btn-primary">Buy Now</base-button>
      </router-link>
    </footer>
  </li>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'TernOffer',
  props: {
    offer: Object,
    activeDuration: Number,
    isBest: Boolean,
    callback: Function,
  },
  components: {
    BaseButton,
  },
  computed: {
    getPrice() {
      return this.offer.prices.filter((price) => price.duration === this.activeDuration)[0].price;
    },
    getDiscount() {
      return this.offer.prices.filter((price) => price.duration === this.activeDuration)[0].discount;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.pricing__plans-group__item {
  width: 100%;
  text-align: center;
  border-radius: 0.625rem;
  padding: 1.25rem 0;
  &.best {
    background-color: $blue-100;
    .plan__header {
      h1 {
        color: $white-100;
      }
      &-price {
        &__row {
          h3 {
            color: rgba($white-100, 0.7);
          }
          span {
            background-color: $yellow-100;
            color: $blue-200;
          }
        }
        h1 {
          color: $white-100;
          span {
            color: $white-100;
          }
        }
      }
    }
    .plan__column {
      &-group {
        &__item {
          h3 {
            color: $white-100;
          }
        }
      }
    }
  }
  .plan__header {
    h1 {
      @include fluid-type($text-xl, $text-xl, 700, $blue-100);
      text-transform: uppercase;
    }
    &-price {
      padding: 1.25rem 0;
      &__row {
        @include center;
        h3 {
          @include fluid-type($text-base, $text-base, 700, $gray-200);
          text-decoration: line-through;
        }
        span {
          @include fluid-type($text-sm, $text-sm, 700, $white-100);
          border-radius: 0.25rem;
          background-color: $blue-200;
          padding: 0.25rem 0.75rem;
          margin-left: 0.625rem;
        }
      }
      h1 {
        @include fluid-type($text-3xl, $text-3xl, 700, $blue-200);
        margin-top: 0.5rem;
        span {
          @include fluid-type($text-sm, $text-sm, 700, $blue-200);
        }
      }
    }
  }
  .plan__column {
    &-group {
      &__item {
        border-bottom: 0.063rem solid $white-200;
        padding: 0.75rem 0;
        &:last-child {
          border-bottom: 0;
        }
        h3 {
          @include fluid-type($text-sm, $text-sm, 600, $gray-200);
          span {
            font-weight: 400;
          }
        }
      }
    }
  }
  .plan__footer {
    margin-top: 3rem;
  }
}
</style>
