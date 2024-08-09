<template>
  <div class="box account">
    <header class="account__header">
      <div class="account__header-image">
        <img :src="this.avatar" alt="Avatar" />
      </div>
      <div class="account__header-text">
        <h1>{{ this.firstName }} {{ this.lastName }}</h1>
        <div class="account__header-text__address">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="icon"></font-awesome-icon>
          <h3>{{ this.street }} | {{ this.city }}</h3>
        </div>
      </div>
    </header>

    <div class="account__body">
      <ul class="account__body-group">
        <li class="account__body-group__item">
          <h3>Email</h3>
          <h3 class="value">{{ this.email }}</h3>
        </li>
        <li class="account__body-group__item double">
          <div class="double__part">
            <h3>Phone Number</h3>
            <h3 class="value">{{ this.phone }}</h3>
          </div>
          <div class="double__part">
            <h3>Registration Date</h3>
            <h3 class="value">{{ this.registrationDate }}</h3>
          </div>
        </li>
        <li class="account__body-group__item">
          <h3>
            Two-factor Auth
            <span :class="{ enabled: this.twoFactorAuth, disabled: !this.twoFactorAuth }">{{
              this.twoFactorAuth ? 'Enabled' : 'Disabled'
            }}</span>
          </h3>
          <h3 class="value">Protect yourself with two-factor protection</h3>
        </li>
      </ul>
    </div>

    <footer class="account__footer">
      <base-button class="btn-secondary" @click="this.open">Edit</base-button>
    </footer>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import UserAvatarImage from '@/assets/images/login/login-person.jpg';

export default {
  name: 'DashboardUser',
  components: {
    BaseButton,
  },
  data() {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Snow',
      avatar: UserAvatarImage,
      city: 'Asheville NC',
      street: '10 Ascot Point Cir 205',
      email: 'mr.tretyak15@gmail.com',
      phone: '+1 (828) 450 15 87',
      registrationDate: 'Now 19 2024, 17:32',
      twoFactorAuth: false,
    };
  },
  methods: {
    open() {
      this.$emitter.emit('_dashboard_-show-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.box {
  background-color: $white-100;
  border-radius: 1.5rem;
  padding: 2rem;
}

.account {
  grid-area: 1 / 1 / 5 / 3;
  @media screen and (max-width: 1400px) {
    grid-area: 1 / 1 / 5 / 3;
  }
}

.account {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  &__header {
    @include center-col;
    &-image {
      img {
        width: 100%;
        width: 8rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
      }
    }
    &-text {
      @include center-col;
      margin-top: 1.25rem;
      text-align: center;
      h1 {
        @include fluid-type($text-3xl, $text-3xl, 600, $blue-200);
      }
      &__address {
        margin-top: 0.625rem;
        @include center-y;
        .icon {
          color: $gray-200;
        }
        h3 {
          @include fluid-type($text-sm, $text-sm, 500, $gray-200);
          margin-left: 0.5rem;
        }
      }
    }
  }
  &__body {
    &-group {
      &__item {
        margin-top: 1.5rem;
        &.double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1.5rem;
          @media screen and (max-width: 400px) {
            display: flex;
            flex-direction: column;
          }
        }
        h3 {
          @include fluid-type($text-sm, $text-sm, 500, $gray-200);
          span {
            color: $gray-200;
            font-weight: 700;
            &.enabled {
              color: $green-2;
            }
            &.disabled {
              color: $red-1;
            }
          }
          &.value {
            @include fluid-type($text-base, $text-base, 600, $blue-200);
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
  &__footer {
    button {
      width: 100%;
    }
  }
}
</style>
