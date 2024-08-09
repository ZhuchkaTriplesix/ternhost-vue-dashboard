<script>
import {useOrderStore} from "@/stores/useOrderStore.js";
import {OrderType} from "@/enums/order.js";

export default {
  name: "OrderCartDomainTotal",
  data() {
    return {
      store: useOrderStore()
    }
  },
  computed: {
    getTotalPrice() {
      return this.store.getTotalPriceByCategory(OrderType.DOMAIN);
    },
    getTotalDiscountPrice() {
      return this.store.getTotalDiscountPriceByCategory(OrderType.DOMAIN);
    }
  }
}
</script>

<template>
  <div class="top">
    <h1>Total</h1>
    <div class="total-price">
      <h1>${{ this.getTotalPrice }}</h1>
      <h1>${{ this.getTotalDiscountPrice }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

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
</style>