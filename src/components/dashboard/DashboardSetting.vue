<template>
  <section class="setting" ref="wrapper">
    <div class="setting__modal" ref="content">
      <header class="setting__header">
        <h1>Profile</h1>
        <i class="fa-regular fa-circle-xmark icon"></i>
      </header>
      <div class="setting__body">
        <dashboard-setting-security></dashboard-setting-security>
        <dashboard-setting-form></dashboard-setting-form>
      </div>
      <footer class="setting__footer">
        <base-button class="btn-white" @click="this.toggle">Cancel</base-button>
        <base-button class="btn-secondary" @click="this.fakeClick">Save</base-button>
      </footer>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import DashboardSettingSecurity from './DashboardSettingSecurity.vue';
import DashboardSettingForm from './DashboardSettingForm.vue';

import { gsap } from 'gsap';

export default {
  name: 'DashboardSetting',
  components: {
    BaseButton,
    DashboardSettingSecurity,
    DashboardSettingForm,
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.$emitter.on('_dashboard_-show-modal', this.toggle);
  },
  methods: {
    fakeClick() {
      this.$emitter.emit('_dashboard_-save-modal');
    },
    toggle() {
      const tl = gsap.timeline();

      !this.isShow
        ? tl
            .to(this.$refs.wrapper, {
              duration: 0,
              opacity: 0,
              display: 'block',
            })
            .to(this.$refs.content, {
              duration: 0,
              opacity: 0,
              y: '-25%',
            })
            .to(this.$refs.wrapper, {
              duration: 0.25,
              opacity: 1,
            })
            .to(this.$refs.content, {
              duration: 0.25,
              opacity: 1,
              y: '0%',
            })
        : tl
            .to(this.$refs.content, {
              duration: 0.25,
              opacity: 0,
              y: '-25%',
            })
            .to(this.$refs.wrapper, {
              duration: 0.25,
              opacity: 0,
            })
            .to(this.$refs.wrapper, {
              duration: 0,
              display: 'none',
            });

      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.setting {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($blue-200, 0.3);
  z-index: 666;
  overflow-y: auto;
  display: none;
  &__modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1200px;
    background-color: $white-100;
    border-radius: 1.875rem;
    padding: 3.625rem;
    max-height: 95vh;
    overflow-y: auto;
    .setting__header {
      @include center-y-between;
      h1 {
        @include fluid-type($text-3xl, $text-3xl, 600, $blue-200);
      }
      .icon {
        font-size: $text-4xl;
        color: $blue-200;
        cursor: pointer;
      }
    }
    .setting__body {
      margin: 3rem 0;
    }
    .setting__footer {
      display: flex;
      justify-content: flex-end;
      column-gap: 1rem;
      @media screen and (max-width: 500px) {
        flex-direction: column;
        button {
          &:last-child {
            margin-top: 1rem;
          }
        }
      }
    }
  }
}
</style>
