<template>
  <Form
    class="setting__body-form"
    @submit="this.onSubmit"
    @invalid-submit="this.onInvalidSubmit"
    :validation-schema="schema"
  >
    <div class="box grid-2">
      <div class="form-part">
        <label>First Name</label>

        <Field name="firstName" v-model="this.firstName">
          <input type="text" placeholder="Enter your First Name" v-model="this.firstName" />
        </Field>
      </div>
      <div class="form-part">
        <label>Last Name</label>

        <Field name="lastName" v-model="this.lastName">
          <input type="text" placeholder="Enter your Last Name" v-model="this.lastName" />
        </Field>
      </div>
    </div>
    <div class="box grid-2">
      <div class="form-part">
        <label>Email</label>

        <Field name="email" v-model="this.email">
          <input type="text" placeholder="Enter your Email" v-model="this.email" />
        </Field>
      </div>
      <div class="form-part">
        <label>Phone</label>

        <Field name="phone" v-model="this.phone">
          <input type="text" placeholder="Enter your Phone" v-model="this.phone" />
        </Field>
      </div>
    </div>
    <div class="box grid-2">
      <div class="form-part">
        <label>Street</label>

        <Field name="street" v-model="this.street">
          <input type="text" placeholder="Enter your street" v-model="this.street" />
        </Field>
      </div>
      <div class="form-part">
        <label>Country</label>

        <Field name="country" v-model="this.country">
          <input type="text" placeholder="Enter your Country" v-model="this.country" />
        </Field>
      </div>
    </div>
    <div class="box grid-3">
      <div class="form-part">
        <label>City</label>

        <Field name="city" v-model="this.city">
          <input type="text" placeholder="Enter your City" v-model="this.city" />
        </Field>
      </div>
      <div class="form-part">
        <label>State</label>

        <Field name="state" v-model="this.state">
          <input type="text" placeholder="Enter your State or Province" v-model="this.state" />
        </Field>
      </div>
      <div class="form-part">
        <label>Zip Code</label>

        <Field name="zipCode" v-model="this.zipCode">
          <input type="number" placeholder="Enter your zip code" v-model="this.zipCode" />
        </Field>
      </div>

      <button type="submit" ref="enterForm" class="hidden"></button>
    </div>
  </Form>
</template>

<script>
import { Form, Field } from 'vee-validate';

import * as yup from 'yup';

export default {
  name: 'DashboardSettingForm',
  components: {
    Form,
    Field,
  },
  data() {
    return {
      firstName: 'John',
      lastName: 'Snow',
      email: 'mr.tretyak15@gmail.com',
      phone: '+1 (828) 450 15 87',
      street: '10 Ascot Point Cir 205',
      country: 'United State',
      city: 'Asheville NC',
      state: 'New York',
      zipCode: 10001,
    };
  },
  computed: {
    schema() {
      return yup.object({
        firstName: yup.string(),
        lastName: yup.string(),
        email: yup.string(),
        phone: yup.string(),
        street: yup.string(),
        country: yup.string(),
        city: yup.string(),
        state: yup.string(),
        zipCode: yup.number(),
      });
    },
  },
  mounted() {
    this.$emitter.on('_dashboard_-save-modal', this.fakeClick);
  },
  methods: {
    onSubmit(values) {
      console.log('[onSubmit]: ', values);
    },
    onInvalidSubmit({ errors }) {
      console.log('[onInvalidSubmit]: ', errors);
    },
    fakeClick() {
      this.$refs.enterForm.click();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.setting__body-form {
  margin-top: 3rem;
  .box {
    margin-top: 1rem;
    &.grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    &.grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    &.grid-2,
    &.grid-3 {
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }
    .form-part {
      display: flex;
      flex-direction: column;
      label {
        @include fluid-type($text-xl, $text-xl, 600);
      }
      input {
        @include fluid-type($text-sm, $text-sm, $color: $gray-200);
        padding: 1.25rem;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
        border: 0.063rem solid $gray-200;
      }
    }
  }
}
</style>
