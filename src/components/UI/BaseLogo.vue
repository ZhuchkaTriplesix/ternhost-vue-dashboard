<template>
  <router-link to="/" class="header__logo" :class="{ v2: v2 }">
    <img :src="getLogo" alt="Logo" />
    <h1>Ternhost</h1>
  </router-link>
</template>

<script>
import HeaderLogo from '@/assets/images/header/header-logo.svg';
import LoginLogo from '@/assets/images/login/login-logo.svg';

export default {
  name: 'BaseLogo',
  props: {
    v2: Boolean,
  },
  data() {
    return {
      assets: {
        HeaderLogo,
        LoginLogo,
      },
    };
  },
  computed: {
    getLogo() {
      return this.v2 ? this.assets.LoginLogo : this.assets.HeaderLogo;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header__logo {
  @include center-y;
  &.v2 {
    h1 {
      color: $white-100;
    }
  }
  h1 {
    @include fluid-type($text-3xl, $text-3xl, 700, $blue-200);
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
}
</style>
