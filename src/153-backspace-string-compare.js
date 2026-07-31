/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    // const removeBackspace = str => {
    //     let final = "";
    //     for (let i = 0; i < str.length; i++) {
    //         if (str[i] === "#") {
    //             final = final.slice(0, -1);
    //         } else {
    //             final += str[i];
    //         }
    //     }
    //     return final;
    // };
    // return removeBackspace(s) === removeBackspace(t);

    // O(n) time and O(1) space
    // Count how many characters are being erased
    let sDel = 0;
    let tDel = 0;

    // Start comparing from the end
    let sPos = s.length - 1;
    let tPos = t.length - 1;

    while (sPos >= 0 || tPos >= 0) {
        // Find the next character in s
        while (sPos >= 0) {
            if (s[sPos] === "#") {
                // if char is #, we increment the number of chars to delete
                sDel++;
                sPos--;
            } else if (sDel > 0) {
                // if char is valid, but we still have #s, we delete it
                sDel--;
                sPos--;
            } else break;
        }

        // Find the next character in t
        while (tPos >= 0) {
            if (t[tPos] === "#") {
                tDel++;
                tPos--;
            } else if (tDel > 0) {
                tDel--;
                tPos--;
            } else break;
        }

        if (s[sPos] !== t[tPos]) {
            return false;
        }
        sPos--;
        tPos--;
    }

    return true;
};

module.exports = { backspaceCompare };

console.log(backspaceCompare("xab##", "yc#d#"));
