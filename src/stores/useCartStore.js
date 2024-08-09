import { defineStore } from 'pinia';
import { emitter } from '../main.js';

/**
 * orders: [
 *  uuid: 'asdasdas',
 *  title: "Premium Web Hosting 12 months",
 *  price: 34.99,
 *  discount: 90,
 *  extra: [
 *     { id: 0, name: "DDOS Protection", key: "DDOS_PROTECTION", price: 34.99, discount: 90 },
 *     { id: 1, name: "Daily Backups", key: "DAILY_BACKUPS", price: 44.99, discount: 40 },
 *  ]
 * ]
 */

export const useCartStore = defineStore('cart', {
  state: () => ({
    domains: [],
    hostings: [],
    orders: [],
    discount: 0,
  }),
  getters: {
    getAgesByDomain: (state) => {
      return (name) => {
        const domain = state.domains.filter((domain) => `${domain.root}${domain.tld}` === name);

        return domain[0].ages;
      };
    },
    getCurrentAgeByDomain: (state) => {
      return (name) => {
        const ages = state.getAgesByDomain(name);
        const activeAge = ages.filter((age) => age.isActive === true);

        return activeAge[0].age;
      };
    },
    getOriginalPriceByDomain: () => {
      return (domain) => {
        return domain.ages.filter((age) => age.isActive === true)[0].price;
      };
    },
    getDiscountPriceByDomain: (state) => {
      return (domain) => {
        const originalPrice = state.getOriginalPriceByDomain(domain);
        const discount = domain.ages.filter((age) => age.isActive === true)[0].discount;

        return (originalPrice - (originalPrice / 100) * discount).toFixed(2);
      };
    },
    getTotalOriginalPrice: (state) => {
      let total = 0;

      state.domains.forEach((domain) => {
        domain.ages.forEach((age) => {
          if (age.isActive) total += age.price;
        });
      });

      return total.toFixed(2);
    },
    getTotalDiscountPrice: (state) => {
      let total = 0;

      state.domains.forEach((domain) => {
        domain.ages.forEach((age) => {
          if (age.isActive) {
            total += age.price - (age.price / 100) * age.discount;
          }
        });
      });

      if (state.discount) {
        return (total - (total / 100) * state.discount).toFixed(2);
      }

      return total.toFixed(2);
    },

    getHostingPriceByUuid: (state) => {
      return (uuid, duration) => {
        const hosting = state.hostings.filter((hosting) => hosting.uuid === uuid)[0];

        const a = hosting.prices.filter((price) => price.duration === duration)[0];

        return {
          price: a.price,
          discount: a.discount,
        };
      };
    },
    isAvailablePurchase: (state) => {
      return (fullDomain) => {
        return state.domains.some((domain) => `${domain.root}${domain.tld}` === fullDomain);
      };
    },
    isEmpty: (state) => {
      return !state.domains.length && !state.hostings.length;
    },
    isLatest: (state) => {
      return state.hostings.length + state.domains.length <= 1;
    },
  },
  actions: {
    add(entity, options) {
      console.log(entity);

      if (options.key === 'HOSTING') {
        this.hostings.push(entity);

        const { price, discount } = this.getHostingPriceByUuid(entity.uuid, entity.duration);

        this.orders.push({
          uuid: entity.uuid,
          title: `${entity.title} Web Hosting ${entity.duration} months`,
          price,
          discount,
        });
      }
      if (options.key === 'DOMAIN') {
        this.domains.push(entity);
      }
    },
    remove(uuid, options) {
      if (this.isLatest) return emitter.emit('_order_-show-modal');

      if (options.key === 'HOSTING') {
        this.hostings = this.hostings.filter((hosting) => hosting.uuid !== uuid);
      }
    },
    update() {},
    clear() {
      this.hostings = [];
      this.domains = [];
    },

    // Legacy
    addToCart(domain) {
      this.domains.push(domain);
    },
    removeFromCart(fullDomain) {
      this.domains = this.domains.filter((domain) => `${domain.root}${domain.tld}` !== fullDomain);
    },

    // FIXME: Written by ChatGPT
    setAge(ageId, fullDomain) {
      const domainIndex = this.domains.findIndex((domain) => `${domain.root}${domain.tld}` === fullDomain);
      if (domainIndex !== -1) {
        const domain = JSON.parse(JSON.stringify(this.domains[domainIndex]));
        const ageIndex = domain.ages.findIndex((age) => age.id === ageId);
        if (ageIndex !== -1) {
          domain.ages.forEach((age, index) => {
            age.isActive = index === ageIndex;
          });
          this.domains.splice(domainIndex, 1, domain);
        }
      }
    },
    setDiscount(discount) {
      this.discount = discount;
    },
  },
});
