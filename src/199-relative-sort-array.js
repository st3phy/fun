/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
    const position = new Map();
    const distinct = [];
    let same = [];

    arr2.forEach((val, i) => {
        position.set(val, i);
    });

    for (const val of arr1) {
        const i = position.get(val);
        // Search for val in arr2
        if (i === undefined) {
            distinct.push(val);
        } else {
            // If val existst, add it to same array on its corresponding position
            if (same[i] === undefined) {
                same[i] = [];
            }
            same[i].push(val);
        }
    }

    // We now have the common elements in the correct order
    // also add the remeining elements, sorted
    same.push(distinct.sort((a, b) => a - b));
    same = same.flat();

    return same;
};

module.exports = { relativeSortArray };

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
