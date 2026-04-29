/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
    let len = 0;
    let i = s.length - 1;

    while (i >= 0) {
        // we found a space
        if (s[i] === " ") {
            // we still have not found the beginning of a word
            if (len === 0) {
                i--;
            } else {
                break;
            }
        } else {
            i--;
            len++;
        }
    }

    return len;
};

module.exports = { lengthOfLastWord };
