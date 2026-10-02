const { makeGood } = require("../src/270-make-string-great.js");

describe("Make The String Great", () => {
    const tests = [
        { args: ["leEeetcode"], res: "leetcode" },
        { args: ["abBAcC"], res: "" },
        { args: ["s"], res: "s" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(makeGood(...args)).toStrictEqual(res);
        });
    }
});
