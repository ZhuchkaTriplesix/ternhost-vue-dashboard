<script>
import BaseButton from "@/components/UI/BaseButton.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderPromo",
  components: {
    BaseButton
  },
  data() {
    return {
      store: useOrderStore(),
      promo: ""
    }
  },
  methods: {
    checkPromo() {
      const fakePromo = {
        value: "123",
        discount: 30
      }

      if (this.promo === fakePromo.value) {
        return this.store.setPromo({value: this.promo, status: 1, discount: fakePromo.discount})
      }

      this.store.setPromo({value: "", status: 2, discount: 0});
    }
  }
}
</script>

<template>
  <div class="promocode"
       :class="{
          success: this.store.promo.status === 1,
          error: this.store.promo.status === 2 && this.promo
        }">
    <input
        type="text"
        placeholder="Enter Promocode..."
        v-model="this.promo"
        :disabled="this.store.promo.status === 1"/>
    <base-button @click="this.checkPromo" class="check-promo">
      <font-awesome-icon icon="fa-solid fa-plus" class="icon"></font-awesome-icon>
    </base-button>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

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

.promocode {
  margin: 2rem 2.188rem;
  @media screen and (max-width: 500px) {
    margin: 1rem;
  }

  input {
    width: 100%;
  }

  &.success {
    border: 2px solid $green-2;

    input, .check-promo {
      cursor: not-allowed;
    }

    .check-promo {
      background-color: $green-2;
    }
  }

  &.error {
    border: 2px solid $red-1;

    .check-promo {
      background-color: $red-1;
    }
  }

  .check-promo {
    border-radius: 0;
  }
}
</style>