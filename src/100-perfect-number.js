/**
 *  @param {number} num
 *  @return {boolean}
 */
const checkPerfectNumber = num => {
    // let sum = 0;

    // // The biggest divider of a number (except for number itself) is number/2
    // for (let i = 1; i <= num / 2; i++) {
    //     if (num % i === 0) sum += i;
    // }

    // return sum === num;

    if (num === 1) return false;

    // One is always a divisor
    let sum = 1;

    // A divisor comes in paris
    // if i divides num, than num / i also divides num
    // so we only need to search to sqrt(num)
    const limit = Math.floor(Math.sqrt(num));

    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }

    return sum === num;
};

module.exports = { checkPerfectNumber };

console.log(checkPerfectNumber(4));
