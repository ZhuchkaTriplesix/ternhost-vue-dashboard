import {defineStore} from 'pinia';
import {applyDiscount} from "@/utils/applyDiscount.js";
import {OrderType} from "@/enums/order.js";
import app from "@/App.vue";

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
        promo: {
            value: "",
            status: 0,
            discount: 0,
        }
    }),
    getters: {
        isPurchased: (state) => {
            return (entity) => {
                const result = state.orders.filter(domain => `${domain.root}${domain.tld}` === `${entity.root}${entity.tld}`)

                return result.length > 0;
            }
        },
        isEmpty: (state) => {
            return state.orders.length === 0
        },
        getOrdersByCategory: (state) => {
            return (category) => {
                return state.orders.filter((order) => order.type === category);
            }
        },
        getTotalPriceByCategory: (state) => {
            return (category) => {
                const total = state.orders.filter((order) => order.type === category).reduce((acc, value) => acc += value.activeAge.price, 0)

                return parseFloat(total.toFixed(2));
            }
        },
        getTotalDiscountPriceByCategory: (state) => {
            return (category) => {
                const total = state.orders.filter((order) => order.type === category).reduce((acc, value) => {
                    const discountedPrice = applyDiscount(value.activeAge.price, value.activeAge.discount);

                    return acc + discountedPrice;
                }, 0);

                return parseFloat(applyDiscount(total, state.promo.discount).toFixed(2))
            }
        },
        isExistExtra: (state) => {
            return ({uuid, id}) => {
                const entity = state.orders.filter((order) => order.uuid === uuid)[0];
                const extra = entity?.activeExtra?.filter((extra) => extra.id === id)[0];

                return extra !== undefined;
            }
        },
        getTotal: (state) => {
            let total = 0;

            state.orders.forEach(order => {
                if (order.activeAge && order.activeAge.price) {
                    total += order.activeAge.price;
                }
                if (order.activeExtra && order.activeExtra.length > 0) {
                    order.activeExtra.forEach(extra => {
                        if (extra.price) {
                            total += extra.price;
                        }
                    });
                }
            });

            return total;
        },
        getTotalDiscount: (state) => {
            let totalPrice = 0;

            state.orders.forEach(order => {
                if (order.activeAge && order.activeAge.price !== undefined && order.activeAge.discount !== undefined) {
                    const discountedPrice = order.activeAge.price * (1 - order.activeAge.discount / 100);
                    totalPrice += discountedPrice >= 0 ? discountedPrice : order.activeAge.price;
                }
                if (order.activeExtra && order.activeExtra.length > 0) {
                    order.activeExtra.forEach(extra => {
                        if (extra.price !== undefined && extra.discount !== undefined) {
                            const discountedExtraPrice = extra.price * (1 - extra.discount / 100);
                            totalPrice += discountedExtraPrice >= 0 ? discountedExtraPrice : extra.price;
                        }
                    });
                }
            });

            return applyDiscount(totalPrice, state.promo.discount);
        },
        saved: (state) => {
            if (state.promo.discount) {
                const total = state.getTotal;
                const totalDiscount = applyDiscount(total, state.promo.discount);
                const save = total - totalDiscount;

                return save;
            }

            return 0;
        }
    },
    actions: {
        buy(entity) {
            this.orders.push(entity);
        },
        sell(entity) {
            switch (entity.type) {
                case OrderType.DOMAIN:
                    this.orders = this.orders.filter(order => !(order.type === OrderType.DOMAIN && `${order.root}${order.tld}` === `${entity.root}${entity.tld}`));
                    break;
                case OrderType.HOSTING:
                    this.orders = this.orders.filter(order => order.uuid !== entity.uuid);
                    break;
                default:
                    return console.error(`Unknown order type: ${entity.type}`);
            }
        },
        setActiveAge({entity, age}) {
            const order = this.orders.filter((order) => order.uuid === entity.uuid)[0];

            if (order) {
                order.activeAge = age;
            }
        },
        setPromo({value, status, discount}) {
            this.promo.value = value;
            this.promo.status = status;
            this.promo.discount = discount;
        },
        onExtra({uuid, extra}) {
            const entity = this.orders.filter((order) => order.uuid === uuid)[0];

            if (entity) {
                return entity.activeExtra ? entity.activeExtra.push(extra) : entity.activeExtra = [extra];
            }

            return console.error('Error');
        },
        offExtra({uuid, id}) {
            const entity = this.orders.filter((order) => order.uuid === uuid)[0];

            if (entity) {
                return entity.activeExtra = entity.activeExtra.filter((extra) => extra.id !== id);
            }

            return console.error('Error');
        }
    },
});
