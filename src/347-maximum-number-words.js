/**
 * @param {string} text
 * @param {string} brokenLetters
 * @returns {number}
 */
const canByTypeWords = (text, brokenLetters) => {
    const set = new Set(brokenLetters);
    const words = text.split(" ");
    let typed = 0;

    for (const word of words) {
        let canBeTyped = true;
        for (const ch of word) {
            if (set.has(ch)) {
                canBeTyped = false;
                break;
            }
        }
        if (canBeTyped) typed++;
    }

    return typed;
};

module.exports = { canByTypeWords };

console.log(canByTypeWords("leet code", "dab"));
