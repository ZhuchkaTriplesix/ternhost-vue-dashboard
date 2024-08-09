<template>
  <div class="header__menu-hamburger" @click="open">
    <font-awesome-icon icon="fa-solid fa-bars" class="icon" v-if="!isShow" />
    <font-awesome-icon icon="fa-solid fa-xmark" class="icon" v-else />
  </div>
</template>

<script>
export default {
  name: 'MainHeaderHamburger',
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    open() {
      this.isShow = !this.isShow;
      this.$emitter.emit('show-mobile-menu');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header__menu-hamburger {
  display: none;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display: block;
  }
  .icon {
    font-size: $text-4xl;
    color: $blue-200;
  }
}
</style>
