/**
 * @param {number} x
 * @return {boolean}
 */
// Check digit by digit; runtime 4ms; memory 63mb
// const isPalindrome = x => {
//     if (x == 0) {
//         return true;
//     }
//     if (x < 0) {
//         return false;
//     }

//     // Get the number of digits for the number
//     const len = Math.floor(Math.log10(x)) + 1;
//     const original = x;

//     // Compare first digit with the last one and so forth until the middle
//     for (let i = 0; i < Math.floor(len / 2); i++) {
//         if (x % 10 !== Math.floor(original / Math.pow(10, len - 1 - i)) % 10) {
//             return false;
//         }
//         x = Math.floor(x / 10);
//     }
//     return true;
// };

// Get second half of number and compare to fist half; runtime 4ms; memory 63mb
const isPalindrome = x => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    mirror = 0;
    while (x > mirror) {
        mirror = mirror * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    if (mirror === x || Math.floor(mirror / 10) === x) {
        return true;
    }
    return false;
};

module.exports = { isPalindrome };
