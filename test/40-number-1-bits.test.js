const { hammingWeight } = require("../src/40-number-1-bits.js");

describe("Number Of 1 Bits", () => {
    const tests = [
        { args: [11], res: 3 },
        { args: [128], res: 1 },
        { args: [2147483645], res: 30 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(hammingWeight(...args)).toStrictEqual(res);
        });
    }
});
