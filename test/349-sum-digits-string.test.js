const { getLucky } = require("../src/349-sum-digits-string.js");

describe("Sum Of Digits Of String After Convert", () => {
    const tests = [
        { args: ["iiii", 1], res: 36 },
        { args: ["leetcode", 2], res: 6 },
        { args: ["zbax", 2], res: 8 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getLucky(...args)).toStrictEqual(res);
        });
    }
});
