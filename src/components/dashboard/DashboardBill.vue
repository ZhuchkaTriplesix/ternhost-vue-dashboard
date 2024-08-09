<template>
  <div class="box wallet">
    <header class="wallet__header">
      <h1>Current Wallet</h1>
      <div class="wallet__header-up" @click="this.deposit">
        <font-awesome-icon icon="fa-solid fa-plus" class="icon"></font-awesome-icon>
      </div>
    </header>

    <footer class="wallet__footer">
      <h1>${{ this.balance.toFixed(2) }}</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DashboardBill',
  data() {
    return {
      balance: 1902.11,
    };
  },
  methods: {
    deposit() {
      console.log('[deposit]: ');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.box {
  background-color: $white-100;
  border-radius: 1.5rem;
  padding: 2rem;
}

.wallet {
  grid-area: 1 / 3 / 3 / 5;
  @media screen and (max-width: 1400px) {
    grid-area: 1 / 3 / 3 / 5;
  }
}

.wallet {
  background-color: $blue-100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__header {
    @include center-y-between;
    h1 {
      @include fluid-type($text-2xl, $text-2xl, 600, $white-100);
    }
    &-up {
      @include center;
      width: 2rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: $white-100;
      cursor: pointer;
      .icon {
        font-size: $text-xl;
        color: $blue-100;
      }
    }
  }
  &__footer {
    @include center-y-between;
    h1 {
      @include fluid-type($text-6xl, $text-6xl, 700, $white-100);
    }
    padding-top: 3rem;
  }
}
</style>
