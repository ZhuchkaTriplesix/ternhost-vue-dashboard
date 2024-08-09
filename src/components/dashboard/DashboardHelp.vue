<template>
  <div class="dashboard__body-help" @click="this.getSupport">
    <font-awesome-icon icon="fa-solid fa-circle-question" class="icon"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'DashboardHelp',
  methods: {
    getSupport() {
      console.log('[getSupport]: ');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__body-help {
  @include center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  border-radius: 0.625rem;
  background-color: $white-100;
  cursor: pointer;
  z-index: 3;
  .icon {
    @include center;
    font-size: $text-4xl;
    color: $blue-100;
  }
}
</style>
