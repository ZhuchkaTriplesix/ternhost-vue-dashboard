<template>
  <ul class="header__menu-group">
    <li class="header__menu-group__item" v-for="page in pages" :key="page.id">
      <router-link :to="page.url">{{ page.name }}</router-link>
    </li>
    <li class="header__menu-group__item">
      <router-link to="/users/login">
        <base-button class="btn-primary">Login</base-button>
      </router-link>
    </li>
  </ul>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'MainHeaderMenu',
  components: {
    BaseButton,
  },
  data() {
    return {
      pages: [
        { id: 1, name: 'Domain', url: '/domain' },
        { id: 2, name: 'Hosting', url: '/hosting' },
        { id: 3, name: 'Website Builder', url: '/builder' },
        { id: 4, name: 'Help', url: '/help' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header__menu-group {
  @include center-y;
  column-gap: 2.5rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
  &__item {
    a {
      @include fluid-type($text-base, $text-base, 500, $blue-200);
    }
  }
}
</style>
