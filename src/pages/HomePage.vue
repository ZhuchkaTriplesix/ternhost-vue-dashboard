<template>
  <app-preloader></app-preloader>

  <div class="top">
    <main-promo></main-promo>
    <main-header></main-header>
  </div>

  <home-hero></home-hero>
  <home-sentence></home-sentence>

  <app-services :services="services.items" :title="services.title" class="gray"></app-services>

  <home-reviews></home-reviews>
  <home-counters></home-counters>
  <home-offers></home-offers>

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
import { HomeHero, HomeSentence, HomeReviews, HomeCounters, HomeOffers } from '@/components/home/index.js';
import { services, faq } from '@/static/home.js';
import { usePreloader } from '@/hooks/usePreloader.js';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomePage',
  components: {
    MainPromo,
    MainHeader,
    HomeHero,
    HomeSentence,
    HomeReviews,
    HomeCounters,
    HomeOffers,
    AppServices,
    AppQuestions,
    AppFooter,
    AppTerms,
    AppPreloader,
  },
  data() {
    return {
      services,
      faq,
    };
  },
  mounted() {
    usePreloader();

    ScrollTrigger.create({
      trigger: '.counters',
      once: true,
      onEnter: () => this.$emitter.emit('_animate_counters_-play'),
    });
  },
};
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 666;
}
</style>
