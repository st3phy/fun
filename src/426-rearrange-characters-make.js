/**
 * @param {string} s
 * @param {string} target
 * @returns {number}
 */
const rearrangeCharacters = (s, target) => {
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    for (const char of s) {
        freq1[char.charCodeAt(0) - 97]++;
    }
    for (const char of target) {
        freq2[char.charCodeAt(0) - 97]++;
    }

    let min = 100;

    for (let i = 0; i < 26; i++) {
        // If a letter appears more times in target than in s, target cannot be formed
        if (freq2[i] > freq1[i]) return 0;

        if (freq1[i] && freq2[i]) {
            min = Math.min(min, Math.floor(freq1[i] / freq2[i]));
        }
    }

    return min;
};

module.exports = { rearrangeCharacters };

console.log(rearrangeCharacters("abcba", "abc"));
