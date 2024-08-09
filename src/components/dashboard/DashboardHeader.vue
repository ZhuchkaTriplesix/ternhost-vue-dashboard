<template>
  <header class="dashboard__body-header" ref="header">
    <div class="header__container">
      <div class="header__body">
        <h1 class="header__body-page">{{ this.getCurrentPage }}</h1>
        <img class="header__body-user" :src="this.avatar" alt="User" />

        <div class="header__body-mobile" @click="this.show">
          <base-logo></base-logo>

          <div class="header__body-mobile__bars">
            <font-awesome-icon icon="fa-solid fa-bars" class="icon"></font-awesome-icon>
          </div>
        </div>
      </div>

      <dashboard-header-dropdown></dashboard-header-dropdown>
    </div>
  </header>
</template>

<script>
import BaseLogo from '@/components/UI/BaseLogo.vue';

import LoginPersonImage from '@/assets/images/login/login-person.jpg';

import DashboardHeaderDropdown from './DashboardHeaderDropdown.vue';

export default {
  name: 'DashboardHeader',
  components: {
    BaseLogo,
    DashboardHeaderDropdown,
  },
  data() {
    return {
      avatar: LoginPersonImage,
    };
  },
  computed: {
    getCurrentPage() {
      switch (this.$route.path) {
        case '/dashboard':
          return 'Home';
        case '/dashboard/domain':
          return 'Domain';
        case '/dashboard/hosting':
          return 'Hosting';
        case '/dashboard/builder':
          return 'Builder';
        case '/dashboard/service':
          return 'Service';
        default:
          return '';
      }
    },
  },
  methods: {
    show() {
      this.$emitter.emit('_dashboard_-show-dropdown-menu', this.$refs.header);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__body-header {
  width: 100%;
  background-color: $white-100;
  padding: 0.5rem 1.5rem;
  border-left: 0.063rem solid $blue-200;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  .header__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    .header__body {
      @include center-y-between;
      &-page {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
      &-user {
        width: 3rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
      }
      &-page,
      &-user {
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
      &-mobile {
        display: none;
        cursor: pointer;
        @media screen and (max-width: 1100px) {
          @include center-y-between;
          width: 100%;
        }
        &__logo {
          @include center-y;
          h1 {
            @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
            text-transform: uppercase;
            margin-left: 0.5rem;
          }
        }
        &__bars {
          .icon {
            font-size: $text-3xl;
            color: $blue-200;
          }
        }
      }
    }
  }
}
</style>
