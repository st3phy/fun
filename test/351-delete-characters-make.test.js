const { makeFancyString } = require("../src/351-delete-characters-make.js");

describe("Delete Characters To Make Fancy String", () => {
    const tests = [
        { args: ["leeetcode"], res: "leetcode" },
        { args: ["aaabaaaa"], res: "aabaa" },
        { args: ["aab"], res: "aab" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(makeFancyString(...args)).toStrictEqual(res);
        });
    }
});
