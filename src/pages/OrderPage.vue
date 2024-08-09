<script>

import OrderViewDomain from "@/components/order/domain/OrderViewDomain.vue";
import OrderPass from "@/components/order/OrderPass.vue";

import AppFooter from "@/components/common/AppFooter/AppFooter.vue";
import AppTerms from "@/components/common/AppTerms/AppTerms.vue";

export default {
  name: "OrderPage.vue",
  components: {
    OrderViewDomain,
    OrderPass,
    AppFooter,
    AppTerms,
  }
}
</script>

<template>
  <router-view></router-view>

  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<style scoped lang="scss">
</style>