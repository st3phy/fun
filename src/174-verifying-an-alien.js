/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    // Create a hashMap for the dictionary order
    const map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    }

    // Compare words 2 by 2
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            // If character from first word is mapped to a smaller value than char from second word
            // OR we got to the end of first word, the words are sorted, move to next two words
            if (map.get(words[i][j]) < map.get(words[i + 1][j]) || words[i][j] === undefined) {
                break;
            }
            // If character from first word is mapped to bigger value than char from second word
            // OR we got to the end of the seconds word, the second word is smaller so words are not sorted
            else if (map.get(words[i][j]) > map.get(words[i + 1][j]) || words[i + 1][j] === undefined) {
                return false;
            }
            // If chars are equal, move to next 2 chars
            else {
                continue;
            }
        }
    }

    return true;
};

module.exports = { isAlienSorted };

console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"));
