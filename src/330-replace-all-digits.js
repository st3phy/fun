/**
 * @param {string} s
 * @returns {string}
 */
const replaceDigits = s => {
    const arr = s.split("");

    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = String.fromCharCode(arr[i - 1].charCodeAt(0) + Number(arr[i]));
    }

    return arr.join("");
};

module.exports = { replaceDigits };

console.log(replaceDigits("a1b2c3d4e"));
