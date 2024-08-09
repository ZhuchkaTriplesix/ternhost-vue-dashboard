<template>
  <!-- base-select -->
  <div class="select">
    <!-- base-select-intro -->

    <slot name="intro"></slot>

    <!-- base-select-option -->

    <div class="body" v-if="this.isShow">
      <ul class="list">
        <slot name="body"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  provide() {
    return {
      toggleSelect: () => {
        this.isShow = !this.isShow;
      },
      setValue: (value) => {
        this.onSelect(value);
      },
    };
  },
  props: {
    onSelect: Function,
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.select {
  width: 100%;

  .body {
    width: 100%;
    margin-top: 0.5rem;
    .list {
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
        h3 {
          @include fluid-type($text-base, $text-base, 700, $gray-200);
        }
      }
    }
  }
}
</style>
