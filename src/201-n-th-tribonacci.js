/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = n => {
    if (n < 2) return n;

    let first = 0;
    let second = 1;
    let third = 1;

    for (let i = 3; i <= n; i++) {
        const next = first + second + third;
        first = second;
        second = third;
        third = next;
    }

    return third;

    // Recursive solution - very slow
    // if (n < 2) return n;
    // if (n === 2) return 1;
    // return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
};

module.exports = { tribonacci };

console.log(tribonacci(25));
