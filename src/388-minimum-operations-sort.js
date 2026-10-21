/**
 * @param {string} s
 * @returns {number}
 */
const minOperations = s => {
    let min = "z";
    let max = "a";
    let isSorted = true;

    for (let i = 0; i < s.length; i++) {
        // Find smallest and largest chars in s
        if (s[i] > max) max = s[i];
        if (s[i] < min) min = s[i];

        if (i > 0 && s[i - 1] > s[i]) isSorted = false;
    }

    if (isSorted) return 0;
    if (s.length === 2) return -1;

    // If the smallest char is at the first pos OR the largest char is at the last pos, we can sort the whole string except that char
    if (s[0] === min || s[s.length - 1] === max) return 1;

    // In most cases, we need 2 swaps 1->n-1 OR 0->n-2 depending where the smallest elements are, and then another one for the biggest elements
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === min || s[i] === max) return 2;
    }

    // If the biggest element is ONLY at the start AND the smalles one is ONLY at the end we need to sort 1->n-1 then 0->1, then 1->n-1 to swap them
    return 3;
};

module.exports = { minOperations };

console.log(minOperations("card"));
