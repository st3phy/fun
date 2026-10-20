/**
 * @param {string} s
 * @returns {boolean}
 */
const areNumbersAscending = s => {
    let prev = -1;
    let num = 0;

    for (let i = 0; i <= s.length; i++) {
        // If we find a digit, form the number
        if (s[i] >= "0" && s[i] <= "9") {
            num = num * 10 + Number(s[i]);
        }
        // If not digit, but we have a number
        else if (num > 0) {
            // If current number is smaller than prev one, they are not sorted asc
            if (num <= prev) return false;

            // Previous number becomes current number
            prev = num;

            // Re-start number for next possible digit
            num = 0;
        }
    }

    return true;
};

module.exports = { areNumbersAscending };

console.log(areNumbersAscending("hello world 5 x 5"));
