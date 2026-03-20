const DECIMALS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
const INT_MIN = -1 * 2 ** 31;
const INT_MAX = 2 ** 31 - 1;

/**
 * @param {string} string
 * @return {number}
 */
var myAtoi = function (string) {
    let numInit = false;
    let numSigned = false;
    let numPositive = true;

    // Parse character by character
    let result = 0;
    for (let index = 0; index < string.length; index++) {
        // Ignore leading spaces OR stop if after first digit
        if (" " === string[index]) {
            if (numSigned || numInit) {
                break;
            }

            continue;
        }

        // Set sign once OR stop if sign set multiple times or after first digit
        if ("+" === string[index] || "-" === string[index]) {
            if (numSigned || numInit) {
                break;
            }

            numSigned = true;
            numPositive = "+" === string[index];

            continue;
        }

        // Stop at non-digit character
        if ("undefined" === typeof DECIMALS[string[index]]) {
            break;
        }

        numInit = true;
        result = result * 10 + DECIMALS[string[index]];
    }

    if (!numPositive) {
        result *= -1;
    }

    return result < INT_MIN ? INT_MIN : result > INT_MAX ? INT_MAX : result;
};

module.exports = { myAtoi };
