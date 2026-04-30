/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    // Swap the numbers so that the longest one is the first - runtime 4 ms
    // if (a.length < b.length) {
    //     return addBinary(b, a);
    // }
    // let carry = 0;
    // let res = [];
    // let aLen = a.length - 1;
    // let bLen = b.length - 1;
    // // Traverse longest string
    // for (let i = 0; i <= aLen; i++) {
    //     // Check if we still have digits in the shorter string
    //     if (b[bLen - i] === undefined) {
    //         b[bLen - i] = "0";
    //     }
    //     if (a[aLen - i] === "1" && b[bLen - i] === "1") {
    //         res[aLen - i] = carry ? 1 : 0;
    //         carry = 1;
    //     } else {
    //         if (a[aLen - i] === "1" || b[bLen - i] === "1") {
    //             res[aLen - i] = carry ? 0 : 1;
    //         } else {
    //             if (carry) {
    //                 res[aLen - i] = 1;
    //                 carry = 0;
    //             } else {
    //                 res[aLen - i] = 0;
    //             }
    //         }
    //     }
    // }
    // // If there's a carry left, add it to the result
    // return carry ? "1" + res.join("") : res.join("");

    // Best solution - runtime 0ms
    let i = a.length - 1,
        j = b.length - 1,
        carry = 0,
        result = "";

    // While there are still values in one of the string or we still have a carry
    while (a[i] || b[j] || carry) {
        // Convert current chars to numbers - set to zero if undefined
        const aToNum = a[i] ? Number(a[i]) : 0;
        const bToNum = b[j] ? Number(b[j]) : 0;

        // Add the numbers and the carry
        const sum = aToNum + bToNum + carry;

        // Calculate new carry
        carry = Math.floor(sum / 2);

        // Add new value to beginning of result string
        result = (sum % 2) + result;
        i--;
        j--;
    }

    return result;
};

module.exports = { addBinary };
