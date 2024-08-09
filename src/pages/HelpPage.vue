<template>
  <app-preloader></app-preloader>

  <h1>Help Page</h1>
  <router-link to="/">home</router-link>
</template>

<script>
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

export default {
  name: 'HelpPage',
  components: {
    AppPreloader,
  },
  mounted() {
    setTimeout(() => {
      this.$emitter.emit('_animate_preloader_-close-preloader');
    }, 1000);
  },
};
</script>
