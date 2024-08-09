export const applyDiscount = (value, discount) => {
    return parseFloat((value - (value / 100) * discount).toFixed(2));
}