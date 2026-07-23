/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
    const morse = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--.."
    ];
    const unique = new Set();

    // For each word, compute the representation in Morse code
    for (const word of words) {
        let representation = "";
        for (let i = 0; i < word.length; i++) {
            // Map every character of words to its ASCII value - 97 => a=0, b=1, c=2 etc
            representation += morse[word.charCodeAt(i) - 97];
        }

        // Store unique representation
        unique.add(representation);
    }

    return unique.size;
};

module.exports = { uniqueMorseRepresentations };

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
