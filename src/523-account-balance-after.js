/**
 * @param {number} purchaseAmount
 * @returns {number}
 */
const accountBalanceAfterPurchase = purchaseAmount => {
    return purchaseAmount % 10 < 5
        ? 100 - purchaseAmount + (purchaseAmount % 10)
        : 100 - purchaseAmount + (purchaseAmount % 10) - 10;
};

module.exports = { accountBalanceAfterPurchase };

console.log(accountBalanceAfterPurchase(100));
