/**
 * @param {number[]} code
 * @param {number} k
 * @returns {number[]}
 */
const decrypt = (code, k) => {
    const n = code.length;
    const res = new Array(n).fill(0);

    // for (let i = 0; i < n; i++) {
    //     if (k < 0) {
    //         for (let j = i + k; j < i; j++) {
    //             res[i] += code[(j + n) % n];
    //         }
    //     } else {
    //         for (let j = i + 1; j < i + 1 + k; j++) {
    //             res[i] += code[j % n];
    //         }
    //     }
    // }

    if (k > 0) {
        // Calculate sum of first k elments
        for (let i = 1; i <= k; i++) {
            res[0] += code[i % n];
        }

        // For each element, get the sum from last element, remove the element leaving the window and add the element entering the window
        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] - code[i] + code[(i + k) % n];
        }
    } else {
        // Calculate sum for prev |k| elements
        for (let i = k; i < 0; i++) {
            res[0] += code[(i + n) % n];
        }

        // Slide window as before
        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] - code[(i - 1 + k + n) % n] + code[i - 1];
        }
    }

    return res;
};

module.exports = { decrypt };

console.log(decrypt([2, 4, 9, 3], -2));
