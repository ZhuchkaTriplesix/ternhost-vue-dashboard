<template>
  <div class="dashboard__body">
    <dashboard-header></dashboard-header>
    <dashboard-help></dashboard-help>

    <router-view></router-view>
  </div>
</template>

<script>
import DashboardHeader from './DashboardHeader.vue';
import DashboardHelp from './DashboardHelp.vue';

export default {
  name: 'DashboardView',
  components: {
    DashboardHeader,
    DashboardHelp,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__body {
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  background-color: $white-200;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
