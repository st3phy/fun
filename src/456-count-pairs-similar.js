/**
 * @param {string[]} words
 * @returns {number}
 */
const similarPairs = words => {
    const map = new Map();
    let pairs = 0;

    for (const word of words) {
        let mask = 0;
        for (const ch of word) {
            /*
            Each unique char sets a bit to 1 at its corresponding position
            eg: if word is abca:
                ch = "a", mask = 0 | 1 << 0 = 1
                ch = "b", mask = 1 | 1 << 1 = 1 | 10 = 11
                ch = "c", mask = 11 | 1 << 2 = 11 | 100 = 111
                ch = "a", mask = 111 | 1 << 0 = 111 | 1 = 111
                so "abca" will have the same mask as "abc" or "bbac" etc
            */
            mask |= 1 << (ch.charCodeAt(0) - 97);
        }

        const seen = map.get(mask) || 0;
        pairs += seen;
        map.set(mask, seen + 1);
    }

    return pairs;
};

module.exports = { similarPairs };

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]));
