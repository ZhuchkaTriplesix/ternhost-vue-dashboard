<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";

export default {
  name: "OrderPass.vue",
  components: {
    BaseContainer
  }
}
</script>

<template>
  <section class="skip">
    <base-container>
      <slot name="pass"></slot>
    </base-container>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.skip {
  padding: 5rem 0;

  .container {
    text-align: center;
  }
}

</style>