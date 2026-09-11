/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
    // let sum = 0;

    // // Save number of occurrence of each character of a word in a Map
    // /**
    //  * @param {string} word
    //  * @return {Map}
    //  * */
    // const countChars = word => {
    //     const map = new Map();
    //     for (const char of word) {
    //         map.set(char, (map.get(char) || 0) + 1);
    //     }
    //     return map;
    // };

    // // Map list of provided characters
    // const mapChars = countChars(chars);

    // // Check if a word can be formed by provided character list
    // /**
    //  *
    //  * @param {string} word
    //  * @returns {boolean}
    //  */
    // const isGood = word => {
    //     const mapWord = countChars(word);
    //     // Assume word can be formed
    //     let good = true;

    //     // For each character of word, check if it is found in the provided characters enought times
    //     for (const [key, value] of mapWord) {
    //         if (!mapChars.has(key) || mapChars.get(key) < value) {
    //             good = false;
    //             break;
    //         }
    //     }

    //     return good;
    // };

    // for (const word of words) {
    //     if (isGood(word)) {
    //         sum += word.length;
    //     }
    // }

    // return sum;

    // Fixed size array solution
    let sum = 0;

    const countChars = new Array(26).fill(0);
    for (let i = 0; i < chars.length; i++) {
        countChars[chars.charCodeAt(i) - 97]++;
    }

    for (const word of words) {
        // Assume the word can be formed with provided chars
        let good = true;
        // Save a copy of the mapped arry of character
        const tryChars = [...countChars];

        for (let i = 0; i < word.length; i++) {
            // Consume one character at a time; fail if we run out
            if (--tryChars[word.charCodeAt(i) - 97] < 0) {
                good = false;
                break;
            }
        }

        if (good) {
            sum += word.length;
        }
    }

    return sum;
};

module.exports = { countCharacters };

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
