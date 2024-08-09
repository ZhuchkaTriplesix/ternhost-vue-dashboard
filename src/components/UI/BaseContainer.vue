<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
};
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  max-width: 1536px;
  margin: 0 auto;
}
</style>
