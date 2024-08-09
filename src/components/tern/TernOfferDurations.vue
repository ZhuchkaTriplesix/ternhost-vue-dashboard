<template>
  <ul class="plans-group">
    <li
      class="plans-group__item"
      v-for="duration in this.durations"
      :key="duration.id"
      :class="{ active: duration.isActive }"
      @click="this.$emitter.emit('set-active-offer-duration', duration.id)"
    >
      {{ duration.value }} Month
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TernOfferDurations',
  props: {
    durations: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.plans-group {
  display: flex;
  border: 0.125rem solid $blue-100;
  border-radius: 0.5rem;
  &__item {
    @include fluid-type($text-base, $text-lg, 700, $blue-100);
    text-transform: uppercase;
    border-left: 0.125rem solid $blue-100;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      padding: 1rem 0.5rem;
    }
    &.active {
      background-color: $blue-100;
      color: $white-100;
    }
    &:first-child {
      border-left: 0;
      border-radius: 0.25rem 0 0 0.25rem;
    }
    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }
  &.reverse {
    display: flex;
    border: 0.125rem solid $blue-100;
    border-radius: 0.5rem;
    .plans-group__item {
      @include fluid-type($text-base, $text-lg, 700, $white-100);
      text-transform: uppercase;
      text-align: center;
      padding: 1.25rem 2rem;
      border-left: 0.125rem solid $blue-100;
      transition: all 1s;
      cursor: pointer;
      background-color: $blue-100;
      @media screen and (max-width: 800px) {
        padding: 0.5rem;
      }
      &.active {
        background-color: $white-100;
        color: $blue-100;
      }
      &:first-child {
        border-left: 0;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }
  &.order-hosting {
    border: 0.125rem solid $white-100;
    .plans-group__item {
      color: $white-100;
      &.active {
        background-color: $white-100;
        color: $blue-100;
      }
      &:first-child {
        border-left: 0;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }
}
</style>
