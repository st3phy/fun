/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => {
    const res = [];
    let isSameRow = true;
    const map = new Map([
        ["q", 1],
        ["w", 1],
        ["e", 1],
        ["r", 1],
        ["t", 1],
        ["y", 1],
        ["u", 1],
        ["i", 1],
        ["o", 1],
        ["p", 1],
        ["a", 2],
        ["s", 2],
        ["d", 2],
        ["f", 2],
        ["g", 2],
        ["h", 2],
        ["j", 2],
        ["k", 2],
        ["l", 2],
        ["z", 3],
        ["x", 3],
        ["c", 3],
        ["v", 3],
        ["b", 3],
        ["n", 3],
        ["m", 3]
    ]);

    // For ever word
    for (let i = 0; i < words.length; i++) {
        // Get first character
        const row = map.get(words[i][0].toLowerCase());
        // For every remaining character
        for (let j = 1; j < words[i].length; j++) {
            // If it's on a different row than the first character
            if (map.get(words[i][j].toLowerCase()) !== row) {
                // Set flag to false and break out of word
                isSameRow = false;
                break;
            }
        }
        // If the flag is false
        if (!isSameRow) {
            // Set flag to true and go to next word
            isSameRow = true;
            continue;
        }

        // Push word to results array
        res.push(words[i]);
    }

    return res;
};

module.exports = { findWords };

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
