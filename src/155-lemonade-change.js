/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = bills => {
    let fives = 0;
    let tens = 0;

    for (const bill of bills) {
        if (bill === 5) {
            fives++;
            continue;
        }
        if (bill === 10) tens++;
        if (bill === 20) {
            if (tens > 0) {
                tens--; // give a ten if we have any
            } else {
                if (fives < 2) return false; // try to give 2 5s
                fives -= 2;
            }
        }
        if (fives === 0) return false; // we have no more fives
        fives--; // give a five
    }

    return true;
};

module.exports = { lemonadeChange };

console.log(lemonadeChange([5, 5, 5, 10, 20]));
