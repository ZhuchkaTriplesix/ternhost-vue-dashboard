<template>
  <div class="search-box">
    <div class="search" v-if="!switcher">
      <h1>Search Your Domain Now</h1>
      <div class="search__input">
        <input type="text" placeholder="Search your domain.." />
        <router-link to="/orders">
          <base-button class="btn-secondary">Search</base-button>
        </router-link>
      </div>
      <h3>Already bought a domain? <a href="#" @click="switcher = 1">Transfer it</a></h3>
    </div>
    <div class="search" v-else>
      <h1>Transfer Your Domain Now</h1>
      <div class="search__input">
        <input type="text" placeholder="Search your domain.." />
        <router-link to="/orders">
          <base-button class="btn-secondary transfer">Transfer</base-button>
        </router-link>
      </div>
      <h3>Want a new domain name? <a href="#" @click="switcher = 0">Try domain checker</a></h3>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'DomainHeroSearch',
  components: {
    BaseButton,
  },
  data() {
    return {
      switcher: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.search-box {
  .search {
    @media screen and (max-width: 600px) {
      @include center-col;
    }
    h1 {
      @include fluid-type($text-2xl, $text-3xl, 700, $blue-200);
    }
    &__input {
      width: 31.25rem;
      max-width: 100%;
      display: flex;
      margin: 1.25rem 0;
      input {
        @include fluid-type($text-sm, $text-base, $color: $gray-200);
        padding: 1rem;
        background-color: $white-200;
        border-radius: 0.25rem;
        width: 100%;
      }
      a {
        button {
          padding: 1rem;
        }
      }
    }
    h3 {
      @include fluid-type($text-sm, $text-xl, 600, $blue-200);
      a {
        color: $blue-100;
      }
    }
  }
}
</style>
