/**
 * @param {number} n
 * @returns {number}
 */
const numberOfMatches = n => {
    /*
    Each match is played between two teams
    In each match, a team loses and is eliminated
    There are n teams and only 1 winner
    So n-1 teams will be eliminated, which means n-1 matches will be played
    */
    return n - 1;
};

module.exports = { numberOfMatches };

console.log(numberOfMatches(14));
