const { isPrefixString } = require("../src/352-check-string-is.js");

describe("Check If String Is A Prefix Of Array", () => {
    const tests = [
        { args: ["iloveleetcode", ["i", "love", "leetcode", "apples"]], res: true },
        { args: ["iloveleetcode", ["apples", "i", "love", "leetcode"]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPrefixString(...args)).toStrictEqual(res);
        });
    }
});
