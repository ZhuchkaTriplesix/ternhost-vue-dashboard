<template>
  <app-preloader></app-preloader>

  <main-header class="gray"></main-header>

  <not-found-hero></not-found-hero>

  <app-footer></app-footer>
  <app-terms class="gray"></app-terms>
</template>

<script>
import MainHeader from '@/components/common/MainHeader/MainHeader.vue';

import NotFoundHero from '@/components/notfound/NotFoundHero.vue';

import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

import { usePreloader } from '@/hooks/usePreloader.js';

export default {
  name: 'NotFoundPage',
  components: {
    MainHeader,

    AppFooter,
    AppTerms,
    AppPreloader,

    NotFoundHero,
  },
  mounted() {
    usePreloader();
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.gray {
  background-color: $white-200;
}
</style>
