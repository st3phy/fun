/**
 * @param {string[]} names
 * @param {string[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
    const sortedHeights = heights.map((val, i) => [val, i]).sort((a, b) => b[0] - a[0]);
    const sortedNames = [];

    for (const [_, index] of sortedHeights) {
        sortedNames.push(names[index]);
    }

    return sortedNames;
};

module.exports = { sortPeople };

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
