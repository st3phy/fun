/**
 * @param {string} s
 * @return {number}
 */
const countSegments = s => {
    // If the first character exists and is not a whitespace, we have our first word
    let count = s[0] && s[0] !== " " ? 1 : 0;

    // Go through rest of string
    for (let i = 1; i < s.length; i++) {
        // If the current character is not a space, but the previous one was, we are at the start of a new word
        if (s[i] !== " " && s[i - 1] === " ") {
            count++;
        }
    }

    return count;
};

module.exports = { countSegments };

console.log(countSegments(" hasd   asdf "));
