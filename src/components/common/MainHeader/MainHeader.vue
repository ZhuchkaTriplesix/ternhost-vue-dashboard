<template>
  <header class="header" ref="header">
    <base-container class="container">
      <base-logo></base-logo>

      <div class="header__menu">
        <main-header-menu></main-header-menu>
        <main-header-hamburger></main-header-hamburger>
      </div>
    </base-container>

    <div class="header__mobile" ref="headerMobile">
      <ul class="header__mobile-menu">
        <li class="header__mobile-menu__item" v-for="page in pages" :key="page.id">
          <router-link :to="page.url">{{ page.name }}</router-link>
        </li>
        <li class="header__mobile-menu__item">
          <router-link to="/users/login"><base-button class="btn-secondary">Login</base-button></router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import MainHeaderMenu from './MainHeaderMenu.vue';
import MainHeaderHamburger from './MainHeaderHamburger.vue';

import { gsap } from 'gsap';

export default {
  name: 'MainHeader',
  components: {
    BaseContainer,
    BaseLogo,
    BaseButton,
    MainHeaderMenu,
    MainHeaderHamburger,
  },
  data() {
    return {
      isShow: false,
      pages: [
        { id: 1, name: 'Domain', url: '/domain' },
        { id: 2, name: 'Hosting', url: '/hosting' },
        { id: 3, name: 'Website Builder', url: '/builder' },
        { id: 4, name: 'Help', url: '/help' },
      ],
    };
  },
  mounted() {
    this.$emitter.on('show-mobile-menu', this.animate);
  },
  methods: {
    open() {
      const tl = gsap.timeline();

      tl.to(this.$refs.header, {
        duration: 0.5,
        height: '100vh',
      })
        .to(this.$refs.headerMobile, {
          duration: 0,
          display: 'block',
          opacity: 0,
        })
        .to(this.$refs.headerMobile, {
          opacity: 1,
          duration: 0.5,
        });
    },
    close() {
      const tl = gsap.timeline();

      tl.to(this.$refs.headerMobile, {
        duration: 0.5,
        opacity: 0,
      })
        .to(this.$refs.headerMobile, {
          duration: 0,
          display: 'none',
        })
        .to(this.$refs.header, {
          height: 'auto',
          duration: 0.5,
        });
    },
    animate() {
      !this.isShow ? this.open() : this.close();

      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header {
  background-color: $white-100;
  position: relative;
  display: flex;
  flex-direction: column;
  .container {
    @include center-y-between;
    padding: 1rem 0;
  }
  &__mobile {
    flex-grow: 1;
    display: none;
    &-menu {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &__item {
        text-align: center;
        a {
          @include fluid-type($text-base, $text-base, 500, $blue-200);
        }
      }
    }
  }
}
</style>
