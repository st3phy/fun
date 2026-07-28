/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = sentence => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        // Check if first letter of current word is not a vowel
        const first = words[i][0].toLowerCase();
        if (!vowels.has(first)) {
            // Remove first char from word and add it to the end of word
            words[i] = words[i].slice(1) + words[i][0];
        }
        // Append "ma" and the required number of "a"s
        words[i] += "ma" + "a".repeat(i + 1);
    }

    return words.join(" ");
};

module.exports = { toGoatLatin };

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog iee Or Not Uee"));
