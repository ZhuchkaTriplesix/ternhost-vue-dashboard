<script>
import Switch from "@/components/UI/BaseSwitch.vue";
import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderProductExtra",
  props: {
    product: Object
  },
  components: {
    Switch
  },
  data() {
    return {
      store: useOrderStore(),
      isShow: false,
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    switchOn(id) {
      const extra = this.product.extra.filter((extra) => extra.id === id)[0];

      if (extra) {
        this.store.onExtra({
          uuid: this.product.uuid,
          extra
        })
      }
    },
    switchOff(id) {
      this.store.offExtra({
        uuid: this.product.uuid,
        id
      })
    },
    isEnabledSwitch(id) {
      return this.store.isExistExtra({
        uuid: this.product.uuid,
        id
      });
    },
  }
}
</script>

<template>
  <div class="box__services">
    <header class="box__services-header">
      <h3>More information about this product</h3>
      <div class="box__services-header__hide" @click="this.toggle">
        <h3>{{ this.isShow ? "Hide" : "Show" }}</h3>

        <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon" v-if="this.isShow"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" v-else></font-awesome-icon>
      </div>
    </header>

    <div class="services" v-if="this.isShow">
      <ul class="services__group">
        <li class="services__group-item" v-for="extra in this.product.extra" :key="extra.key">
          <div class="services__group-item__name">
            <h3>{{ extra.title }}</h3>
          </div>
          <div class="services__group-item__end">
            <div class="service-price">
              <h3>${{ extra.price }}</h3>
              <h3 class="discount">${{ this.$discount(extra.price, extra.discount) }}</h3>
            </div>
            <Switch :id="extra.id" :on="this.switchOn" :off="this.switchOff"
                    :is-enabled="this.isEnabledSwitch(extra.id)"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/common/all';

.box__services {
  &-header {
    @include center-y-between;

    h3 {
      @include fluid-type($text-base, $text-base, 500, $gray-200);
    }

    &__hide {
      @include center-y;
      cursor: pointer;

      .icon {
        color: $gray-200;
        margin-left: 0.25rem;
      }
    }
  }

  .services {
    margin-top: 1rem;

    &__group {
      &-item {
        @include center-y-between;
        background-color: $white-200;
        border-radius: 0.25rem;
        padding: 1rem;
        margin-top: 0.25rem;
        @media screen and (max-width: 500px) {
          display: block;
        }

        &:first-child {
          margin-top: 0;
        }

        &__name {
          @include center-y;

          h3 {
            @include fluid-type($text-base, $text-base, 500, $blue-200);
            margin-left: 0.75rem;
          }

          .icon {
            width: 1.5rem;
            aspect-ratio: 1 / 1;
            font-size: 1.5rem;
            color: $blue-200;
          }
        }

        &__end {
          @include center-y;
          @media screen and (max-width: 500px) {
            justify-content: space-between;
          }

          .service-price {
            @include center-y;

            h3 {
              @include fluid-type($text-base, $text-base, 500, $gray-200);
              text-decoration: line-through;

              &.discount {
                @include fluid-type($text-base, $text-base, 700, $blue-200);
                text-decoration: none;
              }

              &:last-child {
                margin-left: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>