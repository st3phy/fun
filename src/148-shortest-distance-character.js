/**
 * @param {string} s
 * @param {string} c
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
    // // Constructing the array interval by interval -> Time complexity O(n)
    // // Store indices of c in s
    // const indices = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === c) {
    //         indices.push(i);
    //     }
    // }

    // // Initialize distances array, filled with zeroes
    // const dist = [];

    // if (indices[0] === 0) {
    //     dist.push(0);
    // }

    // // Add the elements until the first occurrence of c
    // if (indices[0] > 0) {
    //     for (let i = indices[0]; i > 0; i--) {
    //         dist.push(i);
    //     }
    //     dist.push(0);
    // }

    // // Add elements until last occurrence of c
    // let p = 0;
    // while (p < indices.length - 1) {
    //     const left = indices[p];
    //     const right = indices[p + 1];
    //     // Add element between the current two indices of c
    //     for (let i = 1; i < right - left; i++) {
    //         dist.push(Math.min(right - left - i, i));
    //     }
    //     // Push a zero for the right character
    //     dist.push(0);
    //     p++;
    // }

    // // Add element from last occurrence of c
    // let first = 0;
    // for (let i = indices[p] + 1; i < s.length; i++) {
    //     dist.push(++first);
    // }

    // return dist;

    // Two pass solution -> Time complexity O(n)
    const len = s.length;
    const dist = new Array(len).fill(0);
    let prev = -Infinity;

    // Compute differences from left to right
    for (let i = 0; i < len; i++) {
        if (s[i] === c) {
            prev = i;
        }
        dist[i] = i - prev;
    }

    // Compute differences from right to left
    prev = Infinity;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        dist[i] = Math.min(dist[i], prev - i);
    }

    return dist;
};

module.exports = { shortestToChar };

console.log(shortestToChar("loveleetcode", "e"));
