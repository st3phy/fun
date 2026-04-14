/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    // Brute force - remove pairs one by one - runtime 89ms
    // for (let i = 0; i < s.length; i++) {
    //     if ((s[i] == ")" && s[i - 1] == "(") || (s[i] == "]" && s[i - 1] == "[") || (s[i] == "}" && s[i - 1] == "{")) {
    //         s = s.slice(0, i - 1) + s.slice(i + 1);
    //         i = 0;
    //     }
    // }
    // return s ? false : true;
    // Brute force - faster to false, slower overall - runtime 107ms
    // for (let i = 0; i < s.length; i++) {
    //     // If the first closing bracked found does not have a pair imediately before
    //     if (
    //         (s[i] === ")" && s[i - 1] !== "(") ||
    //         (s[i] === "]" && s[i - 1] !== "[") ||
    //         (s[i] === "}" && s[i - 1] !== "{")
    //     ) {
    //         return false;
    //     }
    //     if (
    //         (s[i] === ")" && s[i - 1] === "(") ||
    //         (s[i] === "]" && s[i - 1] === "[") ||
    //         (s[i] === "}" && s[i - 1] === "{")
    //     ) {
    //         s = s.slice(0, i - 1) + s.slice(i + 1);
    //         i = 0;
    //     }
    // }
    // return s ? false : true;

    // HashMap solution - 0ms
    const PAIRS = { "(": ")", "[": "]", "{": "}" };
    let stack = [];

    for (let char of s) {
        // If previous char in stack is the corresponing opening bracket to current char
        if (stack.length && PAIRS[stack[stack.length - 1]] === char) {
            // Remove it
            stack.pop();
        } else {
            // Otherwise, add the char to the stack
            stack.push(char);
        }
    }
    return 0 === stack.length;
};

module.exports = { isValid };

console.log(isValid("()"));
