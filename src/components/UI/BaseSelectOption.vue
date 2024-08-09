<template>
  <li class="item" @click="this.select()">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'BaseSelectOption',
  inject: ['toggleSelect', 'setValue'],
  props: ['value'],
  methods: {
    select() {
      this.setValue(this.value);
      this.toggleSelect();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.item {
  border: 0.063rem solid $gray-200;
  border-bottom: 0;
  padding: 1rem 1.5rem;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba($gray-200, 0.1);
  }
  &:first-child {
    border-radius: 0.25rem 0.25rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.25rem 0.25rem;
    border-bottom: 0.063rem solid $gray-200;
  }
}
</style>
