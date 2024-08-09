<script>
import PreloaderGif from '@/assets/gifs/other/preloader.gif'

export default {
  name: "OrderSearchDomainPreloader",
  data() {
    return {
      preloaderGif: PreloaderGif
    }
  }
}
</script>

<template>
  <div class="preloader">
    <img :src="this.preloaderGif" alt="Preloader">
  </div>
</template>

<style scoped lang="scss">
.preloader {
  img {
    width: 100%;
  }
}
</style>