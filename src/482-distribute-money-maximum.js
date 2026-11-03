/**
 * @param {number} money
 * @param {number} children
 * @returns {number}
 */
const distMoney = (money, children) => {
    if (money < children) return -1;

    // If the money is more than needed to pay each child 8 dollars, one of the children will have more
    if (children * 8 < money) return children - 1;

    // Give 1 dollar to each child
    money -= children;

    // How many chilren can get 8 dollars from the remaining money
    let max = Math.floor(money / 7);

    // How much money remains after giving as many children as possible 8 dollars
    let remaining = money % 7;

    // If there are exactly 3 dollars remaining, and only one child without 8 dollars, take a dollar from one of the children with 8
    if (remaining === 3 && children === max + 1) return max - 1;

    return max;
};

module.exports = { distMoney };

console.log(distMoney(17, 2));
