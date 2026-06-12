/**
 * @param {number} n
 * @return {number}
 */
const fib = n => {
    // if (n < 2) return n;

    // let first = 0;
    // let second = 1;
    // let res;

    // for (let i = 2; i <= n; i++) {
    //     res = first + second;
    //     first = second;
    //     second = res;
    // }

    // return res;

    // Recursive solution
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

module.exports = { fib };

console.log(fib(10));
