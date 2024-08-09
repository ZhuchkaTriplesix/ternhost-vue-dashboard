<template>
  <li class="counters__group-item">
    <h1>{{ value }}{{ data.shortScale }}</h1>
    <h3>{{ data.field }}</h3>
  </li>
</template>

<script>
export default {
  name: 'HomeCounter',
  props: {
    data: Object,
  },
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    this.$emitter.on('_animate_counters_-play', this.animate);
  },
  methods: {
    animate() {
      const time = 1;

      if (this.value < this.data.to) {
        this.value = Math.ceil(this.value + time);
        setTimeout(this.animate, 12.5);
      } else {
        this.value = this.data.to;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.counters__group-item {
  text-align: center;
  h1 {
    @include fluid-type($text-6xl, $text-6xl, 700, $white-100);
  }
  h3 {
    @include fluid-type($text-xl, $text-xl, $color: $white-100);
  }
}
</style>
