/**
 * @param {string} key
 * @param {string} message
 * @returns {string}
 */
const decodeMessage = (key, message) => {
    // Remove white spaces and map every char in key array to its position
    const letters = {};
    let i = 0;
    for (const char of key) {
        if (char !== " " && letters[char] === undefined) {
            letters[char] = i;
            i++;
        }
    }
    const res = [];
    for (const char of message) {
        if (char === " ") {
            res.push(char);
        } else {
            // Add the char that was supposed to be on curren char's position (eg for pos 0, we add "a")
            res.push(String.fromCharCode(letters[char] + 97));
        }
    }

    return res.join("");
};

module.exports = { decodeMessage };

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
