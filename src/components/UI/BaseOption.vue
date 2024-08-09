<script>
export default {
  name: "BaseOption",
  inject: ['onSelect', 'toggle'],
  props: {
    value: Object,
    entity: null,
  },
  methods: {
    select() {
      this.onSelect({value: this.value, entity: this.entity});
      this.toggle()
    }
  }
}
</script>

<template>
  <li class="option" @click="this.select">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
@import '@/styles/common/all';

.option {
  list-style-type: none;
  border: 0.063rem solid $gray-200;
  padding: 0.5rem;
  border-bottom: 0;
  transition: all .2s;
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