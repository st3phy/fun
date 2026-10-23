/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const countOperations = (num1, num2) => {
    let count = 0;

    // Euclidian alg
    while (num1 > 0 && num2 > 0) {
        // We can substarct num2 from num1 for num1/num2 times
        count += Math.floor(num1 / num2);

        // The value of num1 after substracting num2 num1/num2 times
        num1 = num1 % num2;

        // Swap num1 and num2
        [num1, num2] = [num2, num1];
    }

    return count;
};

module.exports = { countOperations };

console.log(countOperations(8, 5));
