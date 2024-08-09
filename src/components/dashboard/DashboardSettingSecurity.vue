<template>
  <div class="setting__body-security">
    <ul class="security">
      <li class="security__item">
        <input type="file" class="hidden" name="avatar" ref="avatar" @change="this.upload" />

        <h1>Avatar</h1>
        <base-button class="btn-secondary" @click="this.fakeClick">Add</base-button>
      </li>
      <li class="security__item" @click="this.confirmEmail">
        <h1>Confirmation By Email</h1>
        <base-button :class="{ 'btn-green': this.isConfirmEmail, 'btn-red': !this.isConfirmEmail }">{{
          this.isConfirmEmail ? 'Enabled' : 'Disabled'
        }}</base-button>
      </li>
      <li class="security__item" @click="this.confirmPhone">
        <h1>Confirmation By Phone</h1>
        <base-button :class="{ 'btn-green': this.isConfirmPhone, 'btn-red': !this.isConfirmPhone }">{{
          this.isConfirmPhone ? 'Enabled' : 'Disabled'
        }}</base-button>
      </li>
      <li class="security__item" @click="this.twoAuth">
        <h1>Two-Factor Authentication</h1>
        <base-button :class="{ 'btn-green': this.isTwoAuth, 'btn-red': !this.isTwoAuth }">{{
          this.isTwoAuth ? 'Enabled' : 'Disabled'
        }}</base-button>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'DashboardSettingSecurity',
  components: {
    BaseButton,
  },
  data() {
    return {
      isConfirmEmail: false,
      isConfirmPhone: false,
      isTwoAuth: false,
    };
  },
  methods: {
    fakeClick() {
      this.$refs.avatar.click();
    },
    upload() {
      console.log('[upload]: ');

      const files = this.$refs.avatar.files;

      if (files) {
        const formData = new FormData(); // avatar
        formData.append('avatar', files[0]);
      }
    },
    confirmEmail() {
      console.log('[confirmEmail]: ');

      if (!this.isConfirmEmail) {
        // Confirm email here...
      }
    },
    confirmPhone() {
      console.log('[confirmPhone]: ');

      if (!this.isConfirmPhone) {
        // Confirm phone here...
      }
    },
    twoAuth() {
      console.log('[twoAuth]: ');

      if (!this.isTwoAuth) {
        // Two auth here...
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.setting__body-security {
  .security {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
    &__item {
      h1 {
        @include fluid-type($text-sm, $text-xl, 600);
        text-wrap: nowrap;
      }
      button {
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
}
</style>
