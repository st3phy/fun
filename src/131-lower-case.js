/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = s => {
    const res = [];

    for (let i = 0; i < s.length; i++) {
        // Get ascii code for current char
        let code = s.charCodeAt(i);
        // If the character is uppercase, transform it to lowercase
        if (code >= 65 && code <= 90) {
            code += 32;
        }
        res.push(String.fromCharCode(code));
    }

    return res.join("");
};

module.exports = { toLowerCase };

console.log(toLowerCase("al&phaBET"));
