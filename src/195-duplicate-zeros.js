/**
 * @param {number[]} arr
 * @return {void}
 */
const duplicateZeros = arr => {
    let len = arr.length - 1;
    let duplicates = 0;

    for (let i = 0; i <= len - duplicates; i++) {
        if (arr[i] === 0) {
            // Edge case: we are at the last element at it is a zero, it will only be added once since there is no space for duplication
            if (i === len - duplicates) {
                arr[len] = 0;
                len--;
                break;
            }
            duplicates++;
        }
    }

    // Start from the last element to be duplicated
    let last = len - duplicates;
    for (let i = last; i >= 0; i--) {
        // Copy zero once
        if (arr[i] === 0) {
            arr[i + duplicates] = 0;
            duplicates--;
        }
        // Copy current value
        arr[i + duplicates] = arr[i];
    }

    return arr;
};

module.exports = { duplicateZeros };

console.log(duplicateZeros([1, 5, 2, 0, 6, 8, 0, 6, 0]));
