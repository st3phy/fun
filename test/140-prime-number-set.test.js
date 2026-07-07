const { countPrimeSetBits } = require("../src/140-prime-number-set.js");

describe("Prime Number Of Set Bits In Binary Representation", () => {
    const tests = [
        { args: [6, 10], res: 4 },
        { args: [10, 15], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countPrimeSetBits(...args)).toStrictEqual(res);
        });
    }
});
