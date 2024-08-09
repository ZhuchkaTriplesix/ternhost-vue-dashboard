<template>
  <div class="mail">
    <div class="mail__girl">
      <img :src="assets.CheckEmailImage" alt="Girl"/>
    </div>
    <footer class="mail__footer">
      <div class="mail__footer-text">
        <h1>Check your Email</h1>
        <h3>We have sent you a reset password link on your registered email address</h3>
      </div>
      <div class="mail__footer-buttons">
        <a href="/">
          <base-button class="btn-secondary">Go to Email</base-button>
        </a>
        <a href="/users/login">
          <base-button class="btn-white">Sign In</base-button>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import CheckEmailImage from '@/assets/images/checkEmail/mail-girl.svg';

export default {
  name: 'CheckEmailForm',
  components: {
    BaseButton,
  },
  data() {
    return {
      assets: {
        CheckEmailImage,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.mail {
  background-color: $white-100;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2.75rem;
  border-radius: 1.875rem;
  transform: translateY(50%);
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  max-width: 31.25rem;
  width: 100%;
  @media screen and (max-width: 900px) {
    position: static;
    display: inline-block;
    top: 0;
    left: 0;
    transform: none;
    padding: 1.625rem;
  }

  &__girl {
    img {
      width: 100%;
      @media screen and (max-width: 500px) {
        transform: translateY(25%);
      }
    }
  }

  &__footer {
    position: relative;
    z-index: 3;
    background-color: $white-100;
    padding-top: 2rem;
    box-shadow: 0 -12.5rem 5rem 0 $white-100;
    @media screen and (max-width: 500px) {
      box-shadow: 0 -5rem 5rem 0 $white-100;
    }

    &-text {
      text-align: center;

      h1 {
        @include fluid-type($text-4xl, $text-4xl, 500, $blue-200);
      }

      h3 {
        @include fluid-type($text-lg, $text-lg, 500, $white-600);
        margin-top: 1rem;
      }
    }

    &-buttons {
      margin-top: 3.125rem;

      button {
        width: 100%;
        box-shadow: 0 0.25rem 1.188rem 0 rgba(#779341, 0.3);

        &:last-child {
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
