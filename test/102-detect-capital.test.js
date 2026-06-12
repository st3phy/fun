const { detectCapitalUse } = require("../src/102-detect-capital.js");

describe("Detect Capital", () => {
    const tests = [
        { args: ["USA"], res: true },
        { args: ["FlaG"], res: false },
        { args: ["Leetcode"], res: true },
        { args: ["flag"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(detectCapitalUse(...args)).toStrictEqual(res);
        });
    }
});
