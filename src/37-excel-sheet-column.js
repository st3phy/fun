/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = columnTitle => {
    let res = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        /* Convert current letter to its alphabet position: A: 1, B: 2, ..., Z: 26
        charCodeAt(i) returns ASCII code: 'A' = 65, so subtract 64 to make it 1-based */
        const char = columnTitle.charCodeAt(i) - 64;

        // Multiply previous result by 26 because Excel columns work like a base-26 numbering system
        res = res * 26 + char;
    }

    return res;
};

module.exports = { titleToNumber };

console.log(titleToNumber("C"));
