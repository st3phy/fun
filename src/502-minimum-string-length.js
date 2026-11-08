/**
 * @param {string} s
 * @param {number}
 */
const minLength = s => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "B" && stack[stack.length - 1] === "A") {
            stack.pop();
            continue;
        } else if (s[i] === "D" && stack[stack.length - 1] === "C") {
            stack.pop();
            continue;
        }
        stack.push(s[i]);
    }

    return stack.length;
};

module.exports = { minLength };

console.log(minLength("ABFCACDB"));
