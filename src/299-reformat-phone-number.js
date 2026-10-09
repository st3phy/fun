/**
 * @param {string} number
 * @returns {string}
 */
const reformatNumber = number => {
    // Remove all spaces and dashed
    number = number.replace(/\s|-/g, "");

    const res = [];
    const n = number.length;
    let i = 0;

    // Add digits to res array 3 by 3, until we are left with a maximum of 4 digits
    while (n - i > 4) {
        res.push(number.slice(i, i + 3));
        i += 3;
    }

    // If there are 4 digits left, add them 2 by 2 to res array
    if (n - i === 4) {
        res.push(number.slice(i, i + 2), number.slice(i + 2));
    } else {
        res.push(number.slice(i));
    }

    return res.join("-");
};

module.exports = { reformatNumber };

console.log(reformatNumber("123 4-567"));
