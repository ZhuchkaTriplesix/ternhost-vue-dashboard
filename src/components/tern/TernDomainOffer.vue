<template>
  <li class="domains__group-item">
    <div class="domains__group-item__body">
      <h3>{{ name }}</h3>
      <h4>${{ monthlyPrice }}/month</h4>
      <h1><span>$</span>{{ annualPrice }}<span>/year</span></h1>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TernDomainOffer',
  props: {
    name: String,
    monthlyPrice: Number,
    annualPrice: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.domains__group-item {
  @media screen and (max-width: 1100px) {
    @include center;
  }
  &__body {
    display: inline-block;
    h3 {
      @include fluid-type($text-xl, $text-xl, 700, $blue-100);
    }
    h4 {
      @include fluid-type($text-sm, $text-sm, $color: $gray-200);
      text-decoration: line-through;
      margin: 0.5rem 0;
    }
    h1 {
      @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      span {
        font-size: $text-xl;
      }
    }
  }
}
</style>
