<template>
  <div class="forgot">
    <header class="forgot__header">
      <div class="forgot__header-title">
        <h2>Welcome to <span>Ternhost</span></h2>
        <h1>Forgot Password?</h1>
      </div>
    </header>
    <Form class="forgot__form" @submit="onSubmit" @invalid-submit="onInvalidSubmit" :validation-schema="schema">
      <div class="forgot__form-group">
        <label>Enter your email</label>
        <Field name="email" v-model="email">
          <input
            type="text"
            placeholder="Username or email address"
            v-model="email"
            :class="{ danger: errors?.email && !email }"
          />
          <ErrorMessage name="email" class="forgot__form-group__error" />
        </Field>
      </div>
      <div class="forgot__form-button">
        <base-button class="btn-secondary">Submit</base-button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

import * as yup from 'yup';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'ForgotPasswordForm',
  components: {
    BaseButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: undefined,
      errors: undefined,
    };
  },
  computed: {
    schema() {
      return yup.object({
        email: yup
          .string('Please enter a valid email address')
          .email('Please enter a valid email address')
          .required('This field cannot be empty'),
      });
    },
  },
  methods: {
    onSubmit(values) {
      console.log('[onSubmit]: ', values);

      this.$router.push('/users/email/check');
    },
    onInvalidSubmit({ errors }) {
      console.log('[onInvalidSubmit]: ', errors);

      this.errors = errors;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.forgot {
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
