const { countCharacters } = require("../src/203-find-words-that.js");

describe("Find Words That Can Be Formed By Characters", () => {
    const tests = [
        { args: [["cat", "bt", "hat", "tree"], "atach"], res: 6 },
        { args: [["hello", "world", "leetcode"], "welldonehoneyr"], res: 10 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countCharacters(...args)).toStrictEqual(res);
        });
    }
});
