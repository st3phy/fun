/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @returns {boolean}
 */
const canFormArray = (arr, pieces) => {
    // Map arr elements to their indices
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }

    // For every array in pieces that has more than 1 element, check if the elements are in the same order as arr
    for (const piece of pieces) {
        // If first element of current piece is not in map, the arrays don't match
        if (!map.has(piece[0])) return false;

        // Check position of rest of pieces in case current piece > 1 element
        for (let i = 1; i < piece.length; i++) {
            // The current element must be directly after the previous element to match arr
            if (!map.has(piece[i]) || map.get(piece[i]) !== map.get(piece[i - 1]) + 1) {
                return false;
            }
        }
    }

    return true;
};

module.exports = { canFormArray };

console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
