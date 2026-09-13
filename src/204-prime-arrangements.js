const MOD = 1e9 + 7;

/**
 * Return if a number is prime
 * @param {number} n
 * @returns {boolean}
 */
const isPrime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

/**
 * Return modulo 10^9 + 7 result for a factorial number
 * @param {number} n
 * @returns {number}
 */
const moduloAns = n => {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = (res * i) % MOD;
    }
    return res;
};

/**
 * @param {number} n
 * @returns {number}
 */
const numPrimeArrangements = n => {
    // Find prime numbers
    let primes = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes++;
        }
    }

    let composites = n - primes;

    // The number of permutations is primes! * composites!
    let res = Number((BigInt(moduloAns(primes)) * BigInt(moduloAns(composites))) % BigInt(MOD));

    return res;
};

module.exports = { numPrimeArrangements };

console.log(numPrimeArrangements(100));
