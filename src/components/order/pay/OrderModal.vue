<script>
import BaseButton from "@/components/UI/BaseButton.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";
import {gsap} from 'gsap';

export default {
  name: "OrderModal",
  components: {
    BaseButton,
  },
  data() {
    return {
      store: useOrderStore(),
      isShow: false,
      callback: undefined,
    }
  },
  mounted() {
    this.$emitter.on("_order_-toggle-modal", (callback) => {
      this.open()
      this.callback = callback;
    })
  },
  methods: {
    open() {
      const tl = gsap.timeline();

      tl.to(".modal__body", {
        duration: 0,
        y: '-25%',
        opacity: 0,
      }).to('.modal', {
        duration: 0,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
      }).to('.modal', {
        duration: 0.25,
        opacity: 1,
      }).to('.modal__body', {
        duration: 0.25,
        y: '0%',
        opacity: 1,
      })
    },
    cancel() {
      const tl = gsap.timeline();

      tl.to('.modal__body', {
        duration: 0.25,
        opacity: 0,
        y: '-25%'
      }).to('.modal', {
        duration: 0.25,
        opacity: 0,
      }).to('.modal', {
        duration: 0,
        display: 'none'
      })
    },
    remove() {
      this.callback();
      this.cancel();
    },
  }
}
</script>

<template>
  <Teleport to="body">
    <section class="modal">
      <div class="modal__body">
        <header class="modal__body-header">
          <h1>Do you want to cancel your order?</h1>
          <h3>Selected services and parameters are not saved</h3>
        </header>

        <div class="modal__body-button">
          <base-button class="btn-secondary" @click="this.cancel">Return to Order</base-button>
          <base-button class="btn-white" @click="this.remove">Cancel The Order</base-button>
        </div>
      </div>
    </section>
  </Teleport>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($blue-200, 0.3);
  z-index: 9999;
  display: none;

  &.show {
    @include center;
  }

  &__body {
    width: 666px;
    max-width: 90%;
    background-color: $white-100;
    border-radius: 1.875rem;
    padding: 2rem;
    text-align: center;

    &-header {
      h1 {
        @include fluid-type($text-2xl, $text-3xl, 700, $blue-200);
      }

      h3 {
        @include fluid-type($text-xl, $text-xl, 500, rgba($blue-200, 0.5));
        margin-top: 1rem;
      }
    }

    &-button {
      display: flex;
      flex-direction: column;
      margin-top: 6.25rem;

      button {
        width: 100%;

        &:last-child {
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>