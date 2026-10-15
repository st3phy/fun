/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @returns {boolean}
 */
const isSumEqual = (firstWord, secondWord, targetWord) => {
    const numberFromWord = word => {
        const nums = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9 };
        let str = "";

        for (const c of word) {
            str += nums[c];
        }

        return Number(str);
    };

    return numberFromWord(firstWord) + numberFromWord(secondWord) === numberFromWord(targetWord);
};

module.exports = { isSumEqual };

console.log(isSumEqual("acb", "cba", "cdb"));
