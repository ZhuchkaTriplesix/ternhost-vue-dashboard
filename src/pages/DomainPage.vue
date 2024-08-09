<template>
  <app-preloader></app-preloader>

  <div class="top">
    <main-promo></main-promo>
    <main-header></main-header>
  </div>

  <domain-hero></domain-hero>
  <app-services :services="services.items" :title="services.title"></app-services>
  <app-questions :faq="faq"></app-questions>
  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import {
  AppFooter,
  AppPreloader,
  AppQuestions,
  AppServices,
  AppTerms,
  MainHeader,
  MainPromo,
} from '@/components/common/index.js';
import { services, faq } from '@/static/domain.js';
import { usePreloader } from '@/hooks/usePreloader.js';

import DomainHero from '@/components/domain/DomainHero.vue';

export default {
  name: 'DomainPage',
  components: {
    MainPromo,
    MainHeader,

    AppServices,
    AppQuestions,
    AppFooter,
    AppTerms,
    AppPreloader,

    DomainHero,
  },
  data() {
    return {
      services,
      faq,
    };
  },
  mounted() {
    usePreloader();
  },
};
</script>

<style scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 666;
}
</style>
