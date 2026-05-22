/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    // If the strings have different lengths, the strings can't be isomorphic
    if (s.length !== t.length) {
        return false;
    }

    // Use two objects to map the characters
    const sTot = {};
    const tTos = {};

    for (let i = 0; i < s.length; i++) {
        // If the char from s has already been mapped to a different char than the current char from t
        if (undefined !== sTot[s[i]] && sTot[s[i]] !== t[i]) {
            return false;
        }
        // If the char from t has already been mapped to a different char than the current char from s
        if (undefined !== tTos[t[i]] && tTos[t[i]] !== s[i]) {
            return false;
        }
        // Map chars to each other
        sTot[s[i]] = t[i];
        tTos[t[i]] = s[i];
    }

    return true;
};

module.exports = { isIsomorphic };
