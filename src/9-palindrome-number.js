/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    let result = true;

    do {
        if (x < 0) {
            result = false;
            break;
        }

        if (x < 10) {
            break;
        }

        const length = Math.floor(Math.log10(x)) + 1;

        for (let i = 0; i <= length / 2; i++) {
            const digit = Math.floor(x / Math.pow(10, length - i - 1)) % 10;
            const mirror = Math.floor(x / Math.pow(10, i)) % 10;

            // Mismatch
            if (digit !== mirror) {
                result = false;
                break;
            }
        }
    } while (false);

    return result;
};

module.exports = { isPalindrome };
