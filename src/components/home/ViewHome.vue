<script>
import Feature from "@/components/home/home/HomeHero.vue";
import Sentence from "@/components/home/home/HomeSentence.vue";
import Reviews from "@/components/home/home/HomeReviews.vue";
import Counters from "@/components/home/home/HomeCounters.vue";
import Offers from "@/components/home/home/HomeOffers.vue";
import Services from "@/components/common/AppServices/AppServices.vue";

import {services} from "@/static/home.js";
import {gsap} from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ViewHome",
  components: {
    Feature,
    Sentence,
    Reviews,
    Counters,
    Offers,
    Services,
  },
  data() {
    return {
      services,
    }
  },
  mounted() {
    ScrollTrigger.create({
      trigger: '.counters',
      once: true,
      onEnter: () => this.$emitter.emit('_animate_counters_-play'),
    });
  },
}
</script>

<template>
  <Feature/>
  <Sentence/>
  <Services :services="this.services.items" :title="this.services.title" class="gray"/>
  <Reviews/>
  <Counters/>
  <Offers/>
</template>

<style scoped lang="scss">

</style>