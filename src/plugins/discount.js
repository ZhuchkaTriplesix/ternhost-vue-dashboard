export default {
    install: (app) => {
        app.config.globalProperties.$discount = (price, discount) => {
            return (price - (price / 100) * discount).toFixed(2);
        };
    },
};
