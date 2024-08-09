<template>
  <div class="service-switch" :class="{ enabled: this.isEnabled }" @click="this.toggle"></div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  props: {
    id: Number,
    on: Function,
    off: Function,
    isEnabled: Boolean,
  },
  methods: {
    toggle() {
      console.log(this.id);

      !this.isEnabled ? this.on(this.id) : this.off(this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.service-switch {
  width: 3.938rem;
  height: 1.875rem;
  border-radius: 3.125rem;
  background-color: $gray-200;
  position: relative;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: all 0.25s;
  &::after {
    content: '';
    position: absolute;
    top: 0.188rem;
    left: 0.188rem;
    width: 1.5rem;
    aspect-ratio: 1 / 1;
    background-color: $white-100;
    border-radius: 50%;
    transition: all 0.25s;
  }
  &.enabled {
    background-color: $blue-100;
    &::after {
      left: calc(100% - 0.188rem);
      transform: translateX(-100%);
    }
  }
}
</style>
