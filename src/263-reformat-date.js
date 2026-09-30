/**
 * @param {string} date
 * @returns {string}
 */
const reformatDate = date => {
    const months = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12
    };
    const values = date.split(" ");

    const year = values[2];

    let month = months[values[1]];
    month = month < 10 ? `0${month}` : month;

    const day = values[0].slice(0, -2).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

module.exports = { reformatDate };

console.log(reformatDate("6th Jun 1933"));
