/**
 * @param {number} n
 * @returns {string}
 */
const thousandSeparator = n => {
    if (n === 0) return "0";

    const arr = [];
    let added = 0;

    while (n > 0) {
        // Add last digit to res array
        arr.push(n % 10);
        added++;

        // Remove last digit from number
        n = Math.floor(n / 10);

        // If we still have digits to add and we already added 3 digits, add a dot
        if (n > 0 && added === 3) {
            arr.push(".");
            added = 0;
        }
    }

    return arr.reverse().join("");
};

module.exports = { thousandSeparator };

console.log(thousandSeparator(0));
