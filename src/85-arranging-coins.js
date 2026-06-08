/**
 *  @param {number} n
 *  @return {number}
 */
const arrangeCoins = n => {
    // The numbers that return complete rows are 0+1, 1+2, 3+3, 6+4, 10+5, 15+6 etc
    // So we calculate the completed rows by using an i index that increment with one
    let complete = 0;
    let i = 1;

    while (true) {
        // If n is a complete number, return the previous index
        if (complete === n) {
            return i - 1;
        }
        // If we went over n, return the number of complete rows from the previously complete number
        if (complete > n) {
            return i - 2;
        }

        complete += i;
        i++;
    }
};

module.exports = { arrangeCoins };

console.log(arrangeCoins(15));
