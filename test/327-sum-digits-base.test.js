const { sumBase } = require("../src/327-sum-digits-base.js");

describe("Sum Of Digits In Base K", () => {
    const tests = [
        { args: [34, 6], res: 9 },
        { args: [10, 10], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumBase(...args)).toStrictEqual(res);
        });
    }
});
