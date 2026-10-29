/**
 * @param {string} word
 * @returns {boolean}
 */
const equalFrequency = word => {
    const freq = new Array(26).fill(0);

    for (let ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (!freq[i]) continue;
        let targetFreq = freq[i] - 1;
        allGood = true;
        for (let j = 0; j < 26; j++) {
            if (!freq[j] || i === j) continue;
            if (!targetFreq) targetFreq = freq[j];
            if (freq[j] !== targetFreq) allGood = false;
        }
        if (allGood) return true;
    }

    return false;
};

module.exports = { equalFrequency };

console.log(equalFrequency("abbcc"));
