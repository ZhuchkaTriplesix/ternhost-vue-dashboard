<script>
import Select from "@/components/UI/BaseSelect.vue";
import Option from "@/components/UI/BaseOption.vue";
import Extra from "@/components/order/pay/OrderProductExtra.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";
import {OrderType} from "@/enums/order.js";

export default {
  name: "OrderProduct",
  props: {
    product: Object
  },
  components: {
    Select,
    Option,
    Extra
  },
  data() {
    return {
      store: useOrderStore(),
    }
  },
  computed: {
    option() {
      return this.product.type === OrderType.DOMAIN ? (entity) => entity.age : (entity) => entity.duration;
    },
    options() {
      return this.product.type === OrderType.DOMAIN ? this.product.ages : this.product.prices;
    },
    age() {
      return this.product.type === OrderType.DOMAIN ? this.product.activeAge.age : this.product.activeAge.duration;
    },
    title() {
      return this.product.type === OrderType.DOMAIN ? `${this.product.root}${this.product.tld}` : this.product.title;
    }
  },
  methods: {
    remove() {
      this.$emitter.emit("_order_-toggle-modal", () => {
        if (this.store.orders.length <= 1) {
          this.$router.push('/');
        }

        this.store.sell(this.product);
      });
    },
    onSelect({value, entity}) {
      this.store.setActiveAge({entity, age: value});
    }
  }
}
</script>

<template>
  <div class="box">
    <header class="box__header">
      <div class="box__header-title">
        <h1>{{ this.product.name }}</h1>
        <span>{{ this.title }}</span>
      </div>
      <div class="box__header-clear" @click="this.remove">
        <font-awesome-icon icon="fa-solid fa-trash-can" class="icon"></font-awesome-icon>
      </div>
    </header>

    <div class="box__select">
      <Select :on-select="this.onSelect" class="select">
        <template #intro>
          <h3 class="select-intro">
            {{ this.age }} months /
            <span class="line-throught">${{ this.product.activeAge.price }} </span>
            <span class="discount"> ${{
                this.$discount(this.product.activeAge.price, this.product.activeAge.discount)
              }}</span>
          </h3>
        </template>

        <Option v-for="value in this.options" :key="value.id" :value="value" :entity="this.product" class="option">
          <h3 class="select-option">{{ this.option(value) }} months /
            <span class="line-throught">${{ value.price }} </span>
            <span class="discount"> ${{ this.$discount(value.price, value.discount) }}</span>
          </h3>
        </Option>
      </Select>
    </div>

    <Extra :product="this.product"/>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.select-body {
  background-color: red !important;
  border-radius: 0.5rem;
}

.select {
  margin: 1rem 0;

  &-body {
    border-radius: 0.5rem;
  }
}

.select-intro, .select-option {
  @include fluid-type($text-base, $text-base, 700, $gray-200);
  padding: 0.5rem;

  .line-throught {
    text-decoration: line-through;
  }

  .discount {
    color: $blue-200;
  }
}

.box {
  padding: 2rem;
  background-color: $white-100;
  box-shadow: 0 0.25rem 2rem 0 rgba($black-100, 0.08);
  margin-top: 1rem;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }

  &:first-child {
    margin-top: 0;
  }

  &__header {
    @include center-y-between;

    &-title {
      @include center-y;

      h1 {
        @include fluid-type($text-3xl, $text-3xl, 700, $blue-200);
      }

      span {
        @include fluid-type($text-xs, $text-xs, 700, $white-100);
        padding: 0.33rem 0.5rem;
        border-radius: 0.25rem;
        background-color: $blue-200;
        margin-left: 0.75rem;
        text-transform: uppercase;
      }
    }

    &-clear {
      @include center;
      width: 3rem;
      aspect-ratio: 1 / 1;
      border-radius: 0.25rem;
      background-color: $white-200;
      cursor: pointer;

      .icon {
        color: $blue-200;
      }
    }
  }

  &.add-new-product {
    text-align: center;

    h1 {
      @include fluid-type($text-xl, $text-2xl, 600, $blue-200);
    }
  }
}
</style>