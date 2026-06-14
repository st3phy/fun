/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = s => {
    let absent = 0;
    let late = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "L":
                late++;
                break;
            case "A":
                absent++;
            default:
                late = 0;
        }

        if (absent > 1 || late === 3) return false;
    }

    return true;
};

module.exports = { checkRecord };

console.log(checkRecord("PPALLPL"));
