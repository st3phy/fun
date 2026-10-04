/**
 * @param {string} text
 * @returns {string}
 */
const reorderSpaces = text => {
    // Get all the words, strip extra spaces
    let words = text.split(" ").filter(Boolean);

    // Compute number of spaces
    let spaces = text.length - words.join("").length;

    // We only have one word
    if (words.length === 1) {
        return words + " ".repeat(spaces);
    }

    // The number of max spaces to add between words
    const maxSpaces = Math.floor(spaces / (words.length - 1));
    // Number of trailing spaces
    const trailingSpaces = spaces % (words.length - 1);

    return words.join(" ".repeat(maxSpaces)) + " ".repeat(trailingSpaces);
};

module.exports = { reorderSpaces };

console.log(reorderSpaces("a b c dex  "));
