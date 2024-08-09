<template>
  <ul class="domains__group">
    <tern-domain-offer
      v-for="domain in domains"
      :key="domain.id"
      :name="domain.name"
      :monthlyPrice="domain.monthlyPrice"
      :annualPrice="domain.annualPrice"
    ></tern-domain-offer>
  </ul>
</template>

<script>
import TernDomainOffer from '@/components/tern/TernDomainOffer.vue';

export default {
  name: 'HomeSentenceDomains',
  components: {
    TernDomainOffer,
  },
  data() {
    return {
      domains: [
        { id: 1, name: '.com', monthlyPrice: 10, annualPrice: 4.99 },
        { id: 2, name: '.in', monthlyPrice: 10, annualPrice: 1.99 },
        { id: 3, name: '.shop', monthlyPrice: 10, annualPrice: 0.99 },
        { id: 4, name: '.nl', monthlyPrice: 10, annualPrice: 2.99 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.domains__group {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
}
</style>
