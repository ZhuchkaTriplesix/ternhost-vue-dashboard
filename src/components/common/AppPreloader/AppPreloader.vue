<template>
  <div class="preloader">
    <img :src="assets.AppPreloaderGif" alt="Preloader" />
  </div>
</template>

<script>
import { gsap } from 'gsap';
import AppPreloaderGif from '@/assets/gifs/other/app-preloader.gif';

export default {
  name: 'AppPreloader',
  data() {
    return {
      assets: {
        AppPreloaderGif,
      },
    };
  },
  mounted() {
    this.$emitter.on('_animate_preloader_-close-preloader', this.close);
  },
  methods: {
    close() {
      const tl = gsap.timeline();

      tl.to('.preloader', {
        opacity: 0,
        duration: 0.666,
      }).to('.preloader', {
        display: 'none',
        duration: 0,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.preloader {
  @include center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background-color: $blue-100;
  img {
    max-width: 90%;
  }
}
</style>
