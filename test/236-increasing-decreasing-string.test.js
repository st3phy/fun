const { sortString } = require("../src/236-increasing-decreasing-string.js");

describe("Increasing Decreasing String", () => {
    const tests = [
        { args: ["aaaabbbbcccc"], res: "abccbaabccba" },
        { args: ["rat"], res: "art" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortString(...args)).toStrictEqual(res);
        });
    }
});
