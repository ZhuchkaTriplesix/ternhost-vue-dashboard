<template>
  <div class="intro" @click="this.select">
    <slot></slot>

    <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon" v-if="!this.isOpen"></font-awesome-icon>
    <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" v-else></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'BaseSelectIntro',
  inject: ['toggleSelect'],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    select() {
      this.toggleSelect();
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.intro {
  @include center-y-between;
  width: 100%;
  border-radius: 0.25rem;
  border: 0.063rem solid $gray-200;
  padding: 1rem 1.5rem;
  cursor: pointer;
  .icon {
    color: $gray-200;
  }
}
</style>
