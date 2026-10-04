const { sumOddLengthSubarrays } = require("../src/278-sum-all-odd.js");

describe("Sum Of All Odd Length Subarrays", () => {
    const tests = [
        { args: [[1, 4, 2, 5, 3]], res: 58 },
        { args: [[1, 2]], res: 3 },
        { args: [[10, 11, 12]], res: 66 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumOddLengthSubarrays(...args)).toStrictEqual(res);
        });
    }
});
