/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    // Transform string to array
    const arr = s.split("");
    let res = "";

    // Take slices of array, k at a time
    for (let i = 0; i < arr.length; i += k) {
        const slice = arr.slice(i, i + k);
        // If current iteration is even, we flip, otherwise we don't
        if ((i / k) % 2 === 0) {
            res += slice.reverse().join("");
        } else {
            res += slice.join("");
        }
    }

    return res;
};

module.exports = { reverseStr };

console.log(reverseStr("onetwoten", 3));
