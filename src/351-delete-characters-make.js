/**
 * @param {string} s
 * @returns {string}
 */
const makeFancyString = s => {
    const arr = s.split("");

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] && arr[i - 1] === arr[i - 2]) {
            arr[i - 2] = "";
        }
    }

    return arr.join("");
};

module.exports = { makeFancyString };

console.log(makeFancyString("aaaaaa"));
