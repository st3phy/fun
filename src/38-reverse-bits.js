/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = n => {
    // Get binary representation of number & reverse bits
    const toBinary = n => {
        let res = "";
        while (n > 0) {
            const remainder = n % 2;
            // Reverse bit by adding it to start of result instead of end
            res += remainder;
            n = (n - remainder) / 2;
        }
        return res;
    };

    // Binary to int
    const toInt = n => {
        let res = 0;
        for (let i = 0; i < n.length; i++) {
            res = res * 2 + Number(n[i]);
        }
        return res;
    };

    n = toBinary(n);

    // Add trailing bits
    const len = 32 - n.length;
    for (let i = 0; i < len; i++) {
        n += "0";
    }

    // Back to integer
    return toInt(n);
};

module.exports = { reverseBits };

console.log(reverseBits(43261596)); //964176192
