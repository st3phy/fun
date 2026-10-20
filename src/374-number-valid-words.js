/**
 * @param {string} sentence
 * @returns {number}
 */
const countValidWords = sentence => {
    const words = sentence.split(" ").filter(Boolean);
    let count = 0;

    for (const word of words) {
        let isGood = 1;
        let hyphens = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === "-") {
                if (
                    hyphens === 1 ||
                    word[i - 1] === undefined ||
                    word[i + 1] === undefined ||
                    word[i - 1] < "a" ||
                    word[i - 1] > "z" ||
                    word[i + 1] < "a" ||
                    word[i + 1] > "z"
                ) {
                    isGood = 0;
                    break;
                }
                hyphens++;
            } else if (word[i] === "." || word[i] === "," || word[i] === "!") {
                if (i !== word.length - 1) {
                    isGood = 0;
                    break;
                }
            } else if (word[i] < "a" || word[i] > "z") {
                isGood = 0;
                break;
            }
        }

        count += isGood;
    }

    return count;
};

module.exports = { countValidWords };

console.log(countValidWords("-"));
