<script>
import Feature from "@/components/home/domain/DomainHero.vue";
import Services from "@/components/common/AppServices/AppServices.vue";

import {services} from "@/static/domain.js";

export default {
  name: "ViewDomain",
  components: {
    Feature,
    Services,
  },
  data() {
    return {
      services,
    }
  }
}
</script>

<template>
  <Feature/>
  <Services :services="this.services.items" :title="this.services.title" class="gray"/>
</template>

<style scoped lang="scss">

</style>