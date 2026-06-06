/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = n => {
    const res = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            res.push("FizzBuzz");
            continue;
        }
        if (i % 3 === 0) {
            res.push("Fizz");
            continue;
        }
        if (i % 5 === 0) {
            res.push("Buzz");
            continue;
        }
        res.push(`${i}`);
    }

    return res;
};

module.exports = { fizzBuzz };

console.log(fizzBuzz(100));
