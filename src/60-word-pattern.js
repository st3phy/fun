/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    // Transform string of words to array
    const words = s.split(" ");

    // If chars in pattern is not equal to number of words, there is no match
    if (words.length !== pattern.length) {
        return false;
    }

    // Map chars to words and words to chars
    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < words.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        // If current char was not previously mapped to current word, map it
        if (!charToWord.has(ch)) {
            charToWord.set(ch, word);
        }

        // If current word was not previously mapped to current char, map it
        if (!wordToChar.has(word)) {
            wordToChar.set(word, ch);
        }

        // If current word was mapped to different char than current, or current char was mapped to different word than current, there is not match
        if (charToWord.get(ch) !== word || wordToChar.get(word) !== ch) {
            return false;
        }
    }

    return true;
};

module.exports = { wordPattern };

console.log(wordPattern("abba", "dog constructor constructor dog"));
