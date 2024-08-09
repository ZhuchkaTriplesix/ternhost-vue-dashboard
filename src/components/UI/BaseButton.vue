<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/variables';
@import '@/styles/common/mixins';
@import '@/styles/common/fluid-type';

.btn {
  @include fluid-type($text-lg, $text-lg, 700, $white-100);
  border-radius: 0.313rem;
  padding: 0.625rem 2.188rem;
  cursor: pointer;
  &-primary {
    background-color: $blue-200;
    border: 0.125rem solid $blue-200;
  }
  &-secondary {
    background-color: $blue-100;
    border: 0.125rem solid $blue-100;
  }
  &-white {
    background-color: $white-100;
    border: 0.125rem solid $blue-100;
    color: $blue-100;
  }
  &-green {
    background-color: $green-2;
    border: 0.125rem solid $green-2;
  }
  &-red {
    background-color: $red-1;
    border: 0.125rem solid $red-1;
  }
}
</style>
