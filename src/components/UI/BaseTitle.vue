<template>
  <header class="services-header">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'BaseTitle',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.services-header {
  text-align: center;
  h1 {
    @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
  }
}
</style>
