import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    navbar: [
      { id: 0, title: 'Home', path: '/dashboard', icon: 'fa-solid fa-house' },
      { id: 1, title: 'Domain', path: '/dashboard/domain', icon: 'fa-solid fa-shield-halved' },
      { id: 2, title: 'Hosting', path: '/dashboard/hosting', icon: 'fa-solid fa-server' },
      { id: 3, title: 'Website Builder', path: '/dashboard/builder', icon: 'fa-solid fa-desktop' },
      { id: 4, title: 'Other Services', path: '/dashboard/service', icon: 'fa-solid fa-microchip' },
    ],
  }),
  getters: {},
  actions: {},
});
