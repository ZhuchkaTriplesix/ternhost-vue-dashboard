import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronRight,
  faBars,
  faCircleXmark,
  faChevronDown,
  faChevronUp,
  faPlus,
  faBasketShopping,
  faCheck,
  faXmark,
  faTrashCan,
  faHouse,
  faShieldHalved,
  faServer,
  faDesktop,
  faMicrochip,
  faLocationDot,
  faShieldDog,
  faCircleDollarToSlot,
  faFingerprint,
  faCircleQuestion,
  faCubes,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGear,
  faCubes,
  faCircleQuestion,
  faFingerprint,
  faShieldDog,
  faCircleDollarToSlot,
  faLocationDot,
  faTrashCan,
  faXmark,
  faChevronRight,
  faBars,
  faCircleXmark,
  faChevronDown,
  faChevronUp,
  faPlus,
  faBasketShopping,
  faCheck,
  faHouse,
  faShieldHalved,
  faServer,
  faDesktop,
  faMicrochip,
);

// Vue Router
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import HostingPage from './pages/HostingPage.vue';
import LoginPage from './pages/LoginPage.vue';
import DomainPage from './pages/DomainPage.vue';
import BuilderPage from './pages/BuilderPage.vue';
import HelpPage from './pages/HelpPage.vue';
import SignupPage from './pages/SignupPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ForgotPasswordPage from './pages/ForgotPasswordPage.vue';
import CheckEmailPage from './pages/CheckEmailPage.vue';
import SetPasswordPage from './pages/SetPasswordPage.vue';
import DashboardPage from './pages/DashboardPage.vue';

import DashboardViewHome from '@/components/dashboard/DashboardViewHome.vue';
import DashboardViewDomain from '@/components/dashboard/DashboardViewDomain.vue';
import DashboardViewHosting from '@/components/dashboard/DashboardViewHosting.vue';
import DashboardViewBuilder from '@/components/dashboard/DashboardViewBuilder.vue';
import DashboardViewServices from '@/components/dashboard/DashboardViewServices.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },

    { path: '/hosting', component: HostingPage },
    { path: '/domain', component: DomainPage },
    { path: '/builder', component: BuilderPage },
    { path: '/help', component: HelpPage },

    { path: '/users/login', component: LoginPage },
    { path: '/users/signup', component: SignupPage },
    { path: '/users/password/forgot', component: ForgotPasswordPage },
    { path: '/users/email/check', component: CheckEmailPage },
    { path: '/users/password/new', component: SetPasswordPage },

    {
      path: '/dashboard',
      component: DashboardPage,
      children: [
        {
          path: '',
          component: DashboardViewHome,
        },
        {
          path: 'domain',
          component: DashboardViewDomain,
        },
        {
          path: 'hosting',
          component: DashboardViewHosting,
        },
        {
          path: 'builder',
          component: DashboardViewBuilder,
        },
        {
          path: 'service',
          component: DashboardViewServices,
        },
      ],
    },

    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
});

// Event Bus
import mitt from 'mitt';

export const emitter = mitt();

// Swiper
import { register } from 'swiper/element/bundle';

register();

// Pinia
import { createPinia } from 'pinia';

const pinia = createPinia();

// Plugins
import getPriceWithDiscount from '@/plugins/getPriceWithDiscount.js';

// Vue
const app = createApp(App);

app.config.globalProperties.$emitter = emitter;

app.use(router);
app.use(pinia);

app.use(getPriceWithDiscount);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
