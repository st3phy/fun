/**
 * @param {string} s
 * @returns {string}
 */
const longestNiceSubstring = s => {
    // Default case, a string with less than 2 chars cannot be nice
    if (s.length < 2) return "";

    const chars = new Set(s);

    // Check if every char in chars appears as uppercase and lowercase
    for (let i = 0; i < s.length; i++) {
        // For current char, compute its counterpart
        const code = s[i].charCodeAt(0);
        const serchChar = code < 97 ? code + 32 : code - 32;

        // If we find a char that has not counterpart
        if (!chars.has(String.fromCharCode(serchChar))) {
            // Split the string by removing the offending char
            const left = longestNiceSubstring(s.slice(0, i));
            const right = longestNiceSubstring(s.slice(i + 1));

            // Return longer part
            return left.length >= right.length ? left : right;
        }
    }

    return s;
};

module.exports = { longestNiceSubstring };

console.log(longestNiceSubstring("YazaAay"));
