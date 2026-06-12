/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = word => {
    // Get char code for first letter
    let first = word.charCodeAt(0);
    let isLowercase;
    let lowercase = 0;
    let uppercase = 0;
    let length = word.length;

    // Check if first letter is lowercase or uppercase
    if (first >= 97) {
        isLowercase = true;
    } else {
        isLowercase = false;
    }

    for (let i = 1; i < length; i++) {
        // Count number of uppercase and lowercase letters
        if (word.charCodeAt(i) >= 97) {
            lowercase++;
        } else {
            uppercase++;
        }
    }

    // If first letter is lowercase, all other letters shoule be lowercase
    // If the first letter is uppercase, all otehr letters should be either lowercase or uppercase
    return (
        (isLowercase && lowercase === length - 1) ||
        (!isLowercase && (uppercase === length - 1 || lowercase === length - 1))
    );

    // One liner:
    // return word.toLowerCase() === word || word.toUpperCase() === word || word[0].toUpperCase() === word[0] && word.slice(1).toLowerCase() === word.slice(1)
};

module.exports = { detectCapitalUse };
