const { isSumEqual } = require("../src/339-check-word-equals.js");

describe("Check If Word Equals Summation Of Two Words", () => {
    const tests = [
        { args: ["acb", "cba", "cdb"], res: true },
        { args: ["aaa", "a", "aab"], res: false },
        { args: ["aaa", "a", "aaaa"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isSumEqual(...args)).toStrictEqual(res);
        });
    }
});
