<template>
  <div class="header__mobile" ref="headerMobile">
    <ul class="header__mobile-menu">
      <li class="header__mobile-menu__item" v-for="page in store.navbar" :key="page.id">
        <a :href="page.path">{{ page.title }}</a>
      </li>
      <li class="header__mobile-menu__item">
        <a href="/users/login"><base-button class="btn-secondary">Support</base-button></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useDashboardStore } from '@/stores/useDashboardStore.js';
import { gsap } from 'gsap';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'DashboardHeaderDropdown',
  props: ['refHeader'],
  components: {
    BaseButton,
  },
  data() {
    return {
      store: useDashboardStore(),
      isShow: false,
    };
  },
  mounted() {
    this.$emitter.on('_dashboard_-show-dropdown-menu', (header) => this.animate(header));
  },
  methods: {
    animate(parent) {
      const tl = gsap.timeline();

      !this.isShow
        ? tl
            .to(parent, {
              duration: 0.5,
              height: '100vh',
            })
            .to(this.$refs.headerMobile, {
              duration: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0,
            })
            .to(this.$refs.headerMobile, {
              opacity: 1,
              duration: 0.5,
            })
        : tl
            .to(this.$refs.headerMobile, {
              duration: 0.5,
              opacity: 0,
            })
            .to(this.$refs.headerMobile, {
              duration: 0,
              display: 'none',
            })
            .to(parent, {
              height: 'auto',
              duration: 0.5,
            });

      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header__mobile {
  height: 100%;
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
</style>
