<template>
  <section class="hero">
    <base-container>
      <domain-hero-search></domain-hero-search>

      <div class="domains">
        <ul class="domains__group">
          <tern-domain-offer
              v-for="domain in domains"
              :key="domain.id"
              :name="domain.name"
              :monthlyPrice="domain.monthlyPrice"
              :annualPrice="domain.annualPrice"
          ></tern-domain-offer>
        </ul>
      </div>

      <div class="show-all">
        <base-button class="btn-secondary">Show All</base-button>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import TernDomainOffer from '@/components/tern/TernDomainOffer.vue';

import DomainHeroSearch from './DomainHeroSearch.vue';

export default {
  name: 'DomainHero',
  components: {
    BaseContainer,
    BaseButton,

    TernDomainOffer,

    DomainHeroSearch,
  },
  data() {
    return {
      domains: [
        {id: 0, name: '.com', monthlyPrice: 10, annualPrice: 4.99},
        {id: 1, name: '.shop', monthlyPrice: 10, annualPrice: 1.99},
        {id: 2, name: '.nl', monthlyPrice: 10, annualPrice: 0.99},
        {id: 3, name: '.nl', monthlyPrice: 10, annualPrice: 2.99},
        {id: 4, name: '.nl', monthlyPrice: 10, annualPrice: 2.99},
        {id: 5, name: '.com', monthlyPrice: 10, annualPrice: 4.99},
        {id: 6, name: '.shop', monthlyPrice: 10, annualPrice: 1.99},
        {id: 7, name: '.nl', monthlyPrice: 10, annualPrice: 0.99},
        {id: 8, name: '.nl', monthlyPrice: 10, annualPrice: 2.99},
        {id: 9, name: '.nl', monthlyPrice: 10, annualPrice: 2.99},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  padding-top: calc(7.188rem + 7.5rem);
  padding-bottom: 3rem;

  .container {
    background-image: url('@/assets/images/domain/domain-feature-background.svg');
    background-repeat: no-repeat;
    background-position: 100% -75%;
    padding: 0;
    @media screen and (max-width: 1100px) {
      background-image: none;
    }

    .domains {
      position: relative;
      z-index: 3;
      background-color: $white-100;
      margin-top: 6.25rem;

      &__group {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 3rem;
        @media screen and (max-width: 1100px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 600px) {
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
        }
      }
    }

    .show-all {
      @include center;
      margin-top: 4.5rem;
    }
  }
}
</style>
