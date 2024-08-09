<script>
export default {
  name: "OrderFeature.vue"
}
</script>

<template>
  <div class="hero-text">
    <slot name="feature"></slot>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.hero-text {
  margin-top: 3.125rem;
  text-align: center;

  h1 {
    @include fluid-type($text-2xl, $text-4xl, 700, $white-100);
  }

  h3 {
    @include fluid-type($text-base, $text-2xl, 500, $white-100);
    margin-top: 1.875rem;
  }
}
</style>