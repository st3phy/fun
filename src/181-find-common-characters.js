/**
 * @param {string[]} words
 * @return {character[]}
 */
const commonChars = words => {
    // Count characters of word
    const count = word => {
        const map = new Map();
        for (const char of word) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        return map;
    };

    // Count chars of first word
    const first = count(words[0]);

    // Go through all other words
    for (let i = 1; i < words.length; i++) {
        const current = count(words[i]);
        first.forEach((value, key, map) => {
            // Delete char from first word if current word does not have it
            if (!current.has(key)) {
                map.delete(key);
            }
            // Keep the smalles value of occurrences of current char
            else {
                map.set(key, Math.min(value, current.get(key)));
            }
        });
    }

    // Push remaining characters into an array
    const res = [];
    for ([key, value] of first) {
        for (let i = 0; i < value; i++) {
            res.push(key);
        }
    }

    return res;
};

module.exports = { commonChars };

console.log(commonChars(["bella", "label", "roller"]));
