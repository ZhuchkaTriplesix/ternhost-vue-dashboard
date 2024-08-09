<template>
  <div class="dashboard__sidebar-support">
    <div class="dashboard__sidebar-support__text">
      <h1>Need Help?</h1>
      <h3>Write to us, our specialists will tell you how to solve your problem as quickly as possible</h3>
    </div>
    <base-button class="btn-white" @click="this.getSupport">Support</base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'DashboardSidebarSupport',
  components: {
    BaseButton,
  },
  methods: {
    getSupport() {
      console.log('[getSupport]: ');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__sidebar-support {
  align-self: flex-end;
  padding: 1rem;
  background-color: $blue-100;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &__text {
    text-align: center;
    h1 {
      @include fluid-type($text-3xl, $text-3xl, 700, $white-100);
    }
    h3 {
      @include fluid-type($text-sm, $text-sm, 500, $white-100);
      margin-top: 1rem;
    }
  }
  button {
    width: 100%;
    margin-top: 3rem;
    &:hover {
      background-color: $white-100;
      color: $blue-100;
    }
  }
}
</style>
