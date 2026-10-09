/**
 * @param {string} command
 * @returns {string}
 */
const interpret = command => {
    const res = [];

    let i = 0;
    while (i < command.length) {
        if (command[i] === "(") {
            if (command[i + 1] === ")") {
                res.push("o");
                i += 2;
            } else {
                res.push("al");
                i += 4;
            }
        } else {
            res.push("G");
            i++;
        }
    }

    return res.join("");
};

module.exports = { interpret };

console.log(interpret("(al)G(al)()()G"));
