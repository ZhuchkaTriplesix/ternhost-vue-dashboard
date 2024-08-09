<template>
  <div class="container">
    <dashboard-table
      :rows="this.rows"
      :switch-on="this.on"
      :switch-off="this.off"
      :action-renew="this.renew"
      :action-controls="this.controls"
    >
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-server" class="icon" />
      </template>
    </dashboard-table>

    <footer class="continue__order">
      <a href="/dashboard">
        <base-button class="btn-secondary">Order Now</base-button>
      </a>
    </footer>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseSwitch from '@/components/UI/BaseSwitch.vue';

import DashboardTable from './DashboardTable.vue';

export default {
  name: 'DashboardViewHosting',
  components: {
    BaseButton,
    BaseSwitch,
    DashboardTable,
  },
  data() {
    return {
      rows: [
        {
          id: 0,
          title: 'Hosting 36 months',
          category: 'Web Builder',
          isOnline: true,
          expiration: '01/01/2025',
          isAutoRenewal: true,
        },
        {
          id: 1,
          title: 'Hosting 36 months',
          category: 'Web Builder',
          isOnline: false,
          expiration: '01/01/2025',
          isAutoRenewal: false,
        },
        {
          id: 2,
          title: 'Hosting 36 months',
          category: 'Web Builder',
          isOnline: true,
          expiration: '01/01/2025',
          isAutoRenewal: true,
        },
      ],
    };
  },
  methods: {
    renew(id) {
      console.log('[renew]: ', id);
    },
    controls(id) {
      console.log('[controls]: ', id);
    },
    on(id) {
      const row = this.getRowById(id);

      row.isAutoRenewal = true;
    },
    off(id) {
      const row = this.getRowById(id);

      row.isAutoRenewal = false;
    },
    getRowById(id) {
      return this.rows.filter((row) => row.id === id)[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.container {
  width: 100%;
  margin: 1.5rem;
  margin-top: calc(1.5rem + 64px);
}

.continue__order {
  background-color: $white-100;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  text-align: center;
}

.icon {
  color: $blue-100;
  font-size: $text-xl;
}
</style>
