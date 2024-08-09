<template>
  <div class="login">
    <header class="login__header">
      <div class="login__header-title">
        <h2>Welcome to <span>Ternhost</span></h2>
        <h1>Sign In</h1>
      </div>
      <div class="login__header-signup">
        <h3>No Account? <br/><a href="/users/signup">Sign Up</a></h3>
      </div>
    </header>
    <div class="login__social">
      <ul class="login__social-group">
        <li class="login__social-group__item" @click="googleLogin">
          <img :src="assets.LoginGoogleIcon" alt="Icon"/>
          <h3>Sign in with Google</h3>
        </li>
        <li class="login__social-group__item" @click="facebookLogin">
          <img :src="assets.LoginFacebookIcon" alt="Icon"/>
        </li>
        <li class="login__social-group__item" @click="appleLogin">
          <img :src="assets.LoginAppleIcon" alt="Icon"/>
        </li>
      </ul>
    </div>
    <Form class="login__form" @submit="onSubmit" @invalid-submit="onInvalidSubmit" :validation-schema="schema">
      <div class="login__form-group">
        <label>Enter your email</label>
        <Field name="email" v-model="email">
          <input
              type="text"
              placeholder="Username or email address"
              v-model="email"
              :class="{ danger: errors?.email && !email }"
              @input="checkEmail"
          />
          <ErrorMessage name="email" class="login__form-group__error"/>
        </Field>
      </div>
      <div v-if="showConfirmationMessage" class="login__form-group__error">
        <p>Please confirm your email address before logging in.</p>
      </div>
      <div class="login__form-group">
        <label>Enter your password</label>
        <Field name="password" v-model="password">
          <input
              type="password"
              placeholder="Password"
              v-model="password"
              :class="{ danger: errors?.password && !password }"
          />
          <ErrorMessage name="password" class="login__form-group__error"/>
        </Field>
        <a href="/users/password/forgot">Forgot Password</a>
      </div>
      <div class="login__form-button">
        <base-button class="btn-secondary">Sign In</base-button>
      </div>
    </Form>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
import LoginFacebookIcon from '@/assets/images/login/login-facebook-icon.svg';
import LoginGoogleIcon from '@/assets/images/login/login-google-icon.svg';
import LoginAppleIcon from '@/assets/images/login/login-apple-icon.svg';
import BaseButton from '@/components/UI/BaseButton.vue';
import api from '@/api.ts';

export default {
  name: 'LoginForm',
  components: {
    BaseButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      assets: {
        LoginFacebookIcon,
        LoginAppleIcon,
        LoginGoogleIcon,
      },
      email: '',
      password: '',
      errors: undefined,
      showConfirmationMessage: false,
    };
  },
  computed: {
    schema() {
      return yup.object({
        email: yup
          .string('Please enter a valid email address')
          .email('Please enter a valid email address')
          .required('This field cannot be empty'),
        password: yup.string().required('This field cannot be empty'),
      });
    },
  },
  methods: {
    async onSubmit(values) {
      try {
        await api.logIn(values.email, values.password);
        this.$router.push('/dashboard'); 
      } catch (error) {
        if (error.response && error.response.status === 402) {
          this.showConfirmationMessage = true; 
        } else {
          alert(`${error.message} (${error.detail})`);
        }
      }
    },
    onInvalidSubmit({ errors }) {
      console.log('[onInvalidSubmit]: ', errors);
      this.errors = errors;
    },
    googleLogin() {
      console.log('[googleLogin]: ');
    },
    facebookLogin() {
      console.log('[facebookLogin]: ');
    },
    appleLogin() {
      console.log('[appleLogin]: ');
    },
    checkEmail() {
      if (!this.email) {
        this.showConfirmationMessage = false;
      }
    },
  },
  watch: {
    email(newEmail) {
      if (!newEmail) {
        this.showConfirmationMessage = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.login {
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

  &__header {
    @include center-x-between;
    justify-content: space-between;

    &-title {
      h2 {
        @include fluid-type($text-base, $text-xl);

        span {
          @include fluid-type($text-base, $text-xl, 700, $blue-100);
          text-transform: uppercase;
        }
      }

      h1 {
        @include fluid-type($text-4xl, $text-5xl, 700);
        margin-top: 1rem;
      }
    }

    .notification {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 1rem;
    padding: 10rem;
    margin-bottom: 10rem;
    text-align: center;
  }

    &-signup {
      margin-left: 5rem;
      @media screen and (max-width: 900px) {
        margin-left: 1rem;
      }

      h3 {
        @include fluid-type($text-xs, $text-sm, $color: $gray-100);

        a {
          color: $blue-100;
        }
      }
    }
  }

  &__social {
    margin-top: 3.125rem;
    @media screen and (max-width: 500px) {
      margin-top: 2.188rem;
    }

    &-group {
      display: grid;
      grid-template-columns: 5fr 1fr 1fr;
      grid-gap: 0.75rem;
      @media screen and (max-width: 900px) {
        grid-template-columns: 4fr 1fr 1fr;
        grid-gap: 0.25rem;
      }

      &__item {
        @include center;
        background-color: $white-200;
        border-radius: 0.625rem;
        padding: 0.5rem 0;
        cursor: pointer;

        h3 {
          @include fluid-type($text-xs, $text-base, $color: $blue-100);
          margin-left: 0.5rem;
        }
      }
    }
  }

  &__form {
    margin-top: 3.125rem;

    &-group {
      display: flex;
      flex-direction: column;
      margin-top: 2.5rem;
      @media screen and (max-width: 500px) {
        margin-top: 1.875rem;
      }

      &__error {
        @include fluid-type($text-xs, $text-xs, 500, $red-1);
        margin-top: 0.5rem;
      }

      label,
      input {
        @include fluid-type($text-sm, $text-base);
      }

      input {
        width: 100%;
        border-radius: 0.313rem;
        border: 0.063rem solid $gray-100;
        padding: 1.25rem 1.563rem;
        margin-top: 1.25rem;

        &.danger {
          border: 0.063rem solid $red-1;
        }

        &:focus {
          border: 0.063rem solid $blue-100;
        }
      }

      a {
        @include fluid-type($text-sm, $text-sm, $color: $blue-100);
        margin-top: 0.625rem;
        align-self: flex-end;
      }
    }

    &-button {
      margin-top: 3.125rem;
      @media screen and (max-width: 500px) {
        margin-top: 1.875rem;
      }

      button {
        width: 100%;
      }
    }
  }
}
</style>
