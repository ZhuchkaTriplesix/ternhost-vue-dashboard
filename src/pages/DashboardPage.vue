<template>
  <dashboard-setting></dashboard-setting>

  <div class="dashboard">
    <dashboard-sidebar></dashboard-sidebar>
    <dashboard-view></dashboard-view>
  </div>
</template>

<script>
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';
import DashboardView from '@/components/dashboard/DashboardView.vue';
import DashboardSetting from '@/components/dashboard/DashboardSetting.vue';

export default {
  name: 'DashboardPage',
  components: {
    DashboardSidebar,
    DashboardView,
    DashboardSetting,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard {
  display: flex;
}
</style>
