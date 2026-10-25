const { minBitFlips } = require("../src/408-minimum-bit-flips.js");

describe("Minimum Bit Flips To Convert Number", () => {
    const tests = [
        { args: [10, 7], res: 3 },
        { args: [3, 4], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minBitFlips(...args)).toStrictEqual(res);
        });
    }
});
