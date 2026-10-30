/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @returns {boolean}
 */
const haveConflict = (event1, event2) => {
    return event1[0] <= event2[1] && event2[0] <= event1[1];
};

module.exports = { haveConflict };

console.log(haveConflict(["02:00", "03:00"], ["01:15", "02:00"]));
