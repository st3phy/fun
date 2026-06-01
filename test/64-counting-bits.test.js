const { countBits } = require("../src/64-counting-bits.js");

describe("Counting Bits", () => {
    const tests = [
        { args: [2], res: [0, 1, 1] },
        { args: [5], res: [0, 1, 1, 2, 1, 2] },
        {
            args: [32],
            res: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countBits(...args)).toStrictEqual(res);
        });
    }
});
