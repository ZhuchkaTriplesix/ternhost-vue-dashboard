<script>
import {useOrderStore} from "@/stores/useOrderStore.js";
import {OrderType} from "@/enums/order.js";

import Select from "@/components/UI/BaseSelect.vue";
import Option from "@/components/UI/BaseOption.vue";

export default {
  name: "OrderCartDomainList",
  components: {
    Select,
    Option
  },
  data() {
    return {
      store: useOrderStore(),
    }
  },
  computed: {
    getDomains() {
      return this.store.getOrdersByCategory(OrderType.DOMAIN);
    }
  },
  methods: {
    onSelect({value, entity}) {
      this.store.setActiveAge({entity, age: value});
    }
  }
}
</script>

<template>
  <ul class="orders">
    <li class="orders__item" v-for="goods in this.getDomains" :key="goods.uuid">
      <div class="orders__item-domain">
        <h3>{{ goods.root }}{{ goods.tld }}</h3>
      </div>
      <div class="orders__item-age">
        <Select :on-select="this.onSelect">
          <template #intro>
            <h3 class="select-intro">{{ goods.activeAge.age }} months</h3>
          </template>

          <Option v-for="value in goods.ages" :key="value.id" :value="value" :entity="goods">
            <h3 class="select-option">{{ value.age }} months</h3>
          </Option>
        </Select>
      </div>
      <div class="orders__item-price">
        <h3>${{ goods.activeAge.price }}/yr</h3>
        <h1>${{ this.$discount(goods.activeAge.price, goods.activeAge.discount) }}/yr</h1>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.select-intro, .select-option {
  @include fluid-type($text-sm, $text-base, 500, $gray-200);
}

.orders {
  max-height: 478px;
  overflow-y: scroll;

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
</style>