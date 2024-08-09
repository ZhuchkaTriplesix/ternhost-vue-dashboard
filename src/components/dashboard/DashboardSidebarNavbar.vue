<template>
  <div class="menu">
    <ul class="menu__group">
      <li class="menu__group-item" v-for="page in store.navbar" :key="page.id">
        <a :href="page.path" :class="{ active: this.$route.path === page.path }">
          <font-awesome-icon :icon="page.icon" class="icon"></font-awesome-icon>
          <h3>{{ page.title }}</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useDashboardStore } from '@/stores/useDashboardStore.js';

export default {
  name: 'DashboardSidebarNavbar',
  data() {
    return {
      store: useDashboardStore(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.menu {
  margin-top: 2rem;
  &__group {
    margin: 0.625rem;
    &-item {
      margin-top: 0.313rem;
      &:first-child {
        margin-top: 0;
      }
      a {
        @include center-y;
        padding: 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        &.active {
          background-color: rgba($blue-200, 0.1);
        }
        .icon {
          @include center;
          width: 1.5rem;
          aspect-ratio: 1 / 1;
          color: $blue-200;
        }
        h3 {
          @include fluid-type($text-base, $text-base, 500, $blue-200);
          margin-left: 1.25rem;
        }
      }
    }
  }
}
</style>
