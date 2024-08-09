import { gsap } from 'gsap';

export const offersMixin = {
  mounted() {
    this.$emitter.on('set-active-offer-duration', (id) => this.animate(id));
  },
  methods: {
    getActiveOfferDuration() {
      return this.offerDurations.filter((duration) => duration.isActive === true)[0].value;
    },
    setActiveOfferDuration(id) {
      if (this.offerDurations[id]) this.offerDurations[id].isActive = true;
    },
    resetActiveOfferDuration() {
      this.offerDurations.forEach((duration) => (duration.isActive = false));
    },
    animate(id) {
      const tl = gsap.timeline();

      tl.to(this.$refs.offers, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          this.resetActiveOfferDuration();
          this.setActiveOfferDuration(id);
        },
      }).to(this.$refs.offers, {
        opacity: 1,
        duration: 0.5,
      });
    },
  },
};
