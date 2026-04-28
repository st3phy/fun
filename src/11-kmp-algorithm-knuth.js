/**
 *
 */
const strStr = (haystack, needle) => {
    const generateLps = needle => {
        let len = 0,
            i = 1,
            lps = [];
        lps[0] = 0;
        while (i < needle.length) {
            // if characers match, increment the size of lps
            if (needle[len] === needle[i]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len === 0) {
                    // no matching prefix found, set lps[i] to 0
                    lps[i] = 0;
                    i++;
                } else {
                    // update len to previous lps
                    len = lps[len - 1];
                }
            }
        }
        return lps;
    };

    const lps = generateLps(needle);
    let i = 0,
        j = 0;
    //const res = []; // used in case we want to return all occurences

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            // if the entire patter is matched, returned the index it started at or store in res if we want all occurrences
            if (j === needle.length) {
                return i - j;
                //res.push[i - j];
                // use lps of previous index to skip unnecessary comparisons for next possbile match
                // j = lps [j-1];
            }
        } else {
            // use lps of prev index to avoid redundant comparisons
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    // no matches found
    return -1;
    //return res;
};

module.exports = { strStr };

console.log(strStr("aaabaaacaaad", "aaabaaac"));
