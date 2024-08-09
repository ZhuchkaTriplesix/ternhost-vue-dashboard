<template>
  <a href="#pricing" class="promo">
    <base-container>
      <div class="row">
        <h1>Don't miss deals up to 70% on web hosting</h1>
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
      </div>
    </base-container>
  </a>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  name: 'MainPromo',
  components: {
    BaseContainer,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.promo {
  display: block;
  background-color: $blue-100;
  .container {
    .row {
      @include center;
      h1 {
        @include fluid-type($text-xs, $text-lg, 700, $blue-200);
        color: $white-100;
        padding: 0.5rem;
        text-transform: uppercase;
      }
      .icon {
        margin-left: 0.25rem;
        color: $white-100;
      }
    }
  }
}
</style>
