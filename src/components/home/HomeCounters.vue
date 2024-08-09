<template>
  <section class="counters">
    <base-container>
      <ul class="counters__group">
        <home-counter v-for="counter in counters" :key="counter.id" :data="counter"></home-counter>
      </ul>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';

import HomeCounter from './HomeCounter.vue';

export default {
  name: 'HomeCounters',
  components: {
    BaseContainer,

    HomeCounter,
  },
  data() {
    return {
      counters: [
        { id: 1, from: 0, to: 70, shortScale: 'k', field: 'Shared Web Hosting' },
        { id: 2, from: 0, to: 100, shortScale: 'm', field: 'VPS Hosting' },
        { id: 3, from: 0, to: 11, shortScale: 'k', field: 'Cloud' },
        { id: 4, from: 0, to: 199, shortScale: '+', field: 'Cloud Hosting' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.counters {
  background-color: $blue-100;
  padding: 6.25rem 0;
  .container {
    .counters__group {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 5rem;
      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
