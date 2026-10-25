const { prefixCount } = require("../src/404-counting-words-given.js");

describe("Counting Words With A Given Prefix", () => {
    const tests = [
        { args: [["pay", "attention", "practice", "attend"], "at"], res: 2 },
        { args: [["leetcode", "win", "loops", "success"], "code"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(prefixCount(...args)).toStrictEqual(res);
        });
    }
});
