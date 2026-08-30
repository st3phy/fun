/**
 * @param {number} n
 * @return {boolean}
 */
const divisorGame = n => {
    /* Playing optimally means:
    If the number is even, Alice will always remove 1
        so the number becomes odd
        since the number is now odd, all divisors are odd
        so no matter what Bob removes, the number becomes even again
        so Alice can again remove 1
    If the number is odd, Alice will remove an odd number
        so the number becomes even
        so she loses as seen above
    So Alice always wins if the number is odd
        and she always loses otherwise
    */
    return n % 2 === 0;
};

module.exports = { divisorGame };

console.log(divisorGame(12));
