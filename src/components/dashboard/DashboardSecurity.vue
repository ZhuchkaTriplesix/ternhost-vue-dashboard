<template>
  <div class="box security">
    <header class="security__header">
      <font-awesome-icon icon="fa-solid fa-fingerprint" class="icon"></font-awesome-icon>
    </header>
    <div class="security__body">
      <h1>Controlling your account security one touch</h1>
      <h3>Discover our cards benefits, with one tap.</h3>
    </div>
    <footer class="security__footer">
      <base-button class="btn-secondary" @click="this.open">Settings</base-button>
    </footer>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'DashboardSecurity',
  components: {
    BaseButton,
  },
  methods: {
    open() {
      this.$emitter.emit('_dashboard_-show-modal');
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

.security {
  grid-area: 3 / 5 / 5 / 7;
  @media screen and (max-width: 1400px) {
    grid-area: 5 / 3 / 7 / 6;
  }
}

.security {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
  }
  &__header {
    .icon {
      font-size: $text-5xl;
      color: $blue-100;
      font-weight: 700;
    }
  }
  &__body {
    margin: 1rem 0;
    h1 {
      @include fluid-type($text-2xl, $text-2xl, 700, $blue-200);
    }
    h3 {
      @include fluid-type($text-sm, $text-sm, 500, $gray-200);
      margin-top: 1rem;
    }
  }
  &__footer {
    button {
      width: 100%;
    }
  }
}
</style>
