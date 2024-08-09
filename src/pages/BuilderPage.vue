<template>
  <app-preloader></app-preloader>

  <div class="top">
    <main-promo></main-promo>
    <main-header></main-header>
  </div>

  <builder-hero></builder-hero>

  <app-questions :faq="faq"></app-questions>
  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import { AppFooter, AppPreloader, AppQuestions, AppTerms, MainHeader, MainPromo } from '@/components/common/index.js';
import { usePreloader } from '@/hooks/usePreloader.js';

import BuilderHero from '@/components/builder/BuilderHero.vue';

export default {
  name: 'HostingPage',
  components: {
    MainPromo,
    MainHeader,

    AppQuestions,
    AppFooter,
    AppTerms,
    AppPreloader,

    BuilderHero,
  },
  data() {
    return {
      faq: [
        {
          id: 0,
          question: 'What is Shared Hosting?',
          answer:
            'What is Shared Hosting? What is Shared Hosting? What is Shared Hosting?What is Shared Hosting?What is Shared Hosting? What is Shared Hosting? What is Shared Hosting?What is Shared Hosting?What is Shared Hosting? What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?',
          isActive: false,
        },
        { id: 1, question: 'Why Do I Need to Buy a Domain Name?', answer: 'Fart', isActive: false },
        { id: 2, question: 'What Is Privacy Protection?', answer: 'Fart', isActive: false },
        {
          id: 3,
          question: 'I Already Purchased a Domain Name. Can I Transfer It to TernHost?',
          answer: 'Fart',
          isAcitve: false,
        },
      ],
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
