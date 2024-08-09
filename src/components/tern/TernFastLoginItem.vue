<template>
  <li class="profiles__row-item">
    <header class="profiles__row-item__header" @click="logout(this.session.userId)">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" class="icon" />
    </header>
    <div class="profiles__row-item__person">
      <img :src="this.session.avatar" alt="Icon" />
    </div>
    <footer class="profiles__row-item__footer" @click="login(this.session.userId)">
      <h1>Your Account</h1>
      <h3>{{ this.session.recentOnline }}</h3>
    </footer>
  </li>
</template>

<script>
export default {
  name: 'TernFastLoginItem',
  props: {
    session: Object,
  },
  methods: {
    logout(userId) {
      console.log('[logout]: ', userId);
    },
    login(userId) {
      console.log('[login]: ', userId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';
.profiles__row-item {
  border-radius: 0.625rem;
  background-color: $white-200;
  padding: 0.625rem;
  display: inline-block;
  flex-basis: 9.375rem;
  cursor: pointer;
  &__person,
  &__footer {
    @include center-col;
  }
  &__header {
    display: flex;
    justify-content: flex-end;
    .icon {
      color: $gray-100;
      &:hover {
        color: $blue-100;
      }
    }
  }
  &__person {
    margin: 0.625rem 0;
    img {
      width: 4.75rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
    }
  }
  &__footer {
    text-align: center;
    h1 {
      @include fluid-type($text-base, $text-base, 500);
    }
    h3 {
      @include fluid-type($text-sm, $text-sm, 300, $gray-100);
      margin-top: 0.313rem;
    }
  }
}
</style>
