/**
 * @param {string} password
 * @returns {boolean}
 */
const strongPasswordCheckerII = password => {
    if (password.length < 8) return false;

    let hasSpecial = false;
    let hasDigit = false;
    let hasUpper = false;
    let hasLower = false;

    for (let i = 0; i < password.length; i++) {
        // Contains two of the same char in adjacent positions
        if (i > 0 && password[i] === password[i - 1]) return false;
        if (password[i] >= 0 && password[i] <= 9) {
            hasDigit = true;
        } else if (password[i] >= "A" && password[i] <= "Z") {
            hasUpper = true;
        } else if (password[i] >= "a" && password[i] <= "z") {
            hasLower = true;
        } else {
            hasSpecial = true;
        }
    }

    return hasDigit && hasSpecial && hasLower && hasUpper;
};

module.exports = { strongPasswordCheckerII };

console.log(strongPasswordCheckerII("IloveLe3tcode!"));
