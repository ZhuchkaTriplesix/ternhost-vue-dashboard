<template>
  <aside class="dashboard__sidebar">
    <div class="dashboard__sidebar-top">
      <base-logo class="dashboard-logo"></base-logo>

      <dashboard-sidebar-navbar></dashboard-sidebar-navbar>
    </div>

    <dashboard-sidebar-support></dashboard-sidebar-support>
  </aside>
</template>

<script>
import BaseLogo from '@/components/UI/BaseLogo.vue';

import DashboardSidebarNavbar from './DashboardSidebarNavbar.vue';
import DashboardSidebarSupport from './DashboardSidebarSupport.vue';

export default {
  name: 'DashboardSidebar',
  components: {
    BaseLogo,
    DashboardSidebarNavbar,
    DashboardSidebarSupport,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__sidebar {
  max-width: 19.375rem;
  min-height: 100vh;
  background-color: $white-100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  &-top {
    .dashboard-logo {
      @include center-y;
      padding: 0.625rem 1.5rem;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
        text-transform: uppercase;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
