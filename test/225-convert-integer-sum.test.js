const { getNoZeroIntegers } = require("../src/225-convert-integer-sum.js");

describe("Convert Integer To The Sum Of Two No Zero Integers", () => {
    const tests = [
        { args: [2], res: [1, 1] },
        { args: [11], res: [2, 9] },
        { args: [19], res: [1, 18] },
        { args: [139], res: [1, 138] },
        { args: [1607], res: [8, 1599] },
        { args: [199], res: [1, 198] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getNoZeroIntegers(...args)).toStrictEqual(res);
        });
    }
});
