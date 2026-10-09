const { maxRepeating } = require("../src/294-maximum-repeating-substring.js");

describe("Maximum Repeating Substring", () => {
    const tests = [
        { args: ["ababc", "ab"], res: 2 },
        { args: ["ababc", "ba"], res: 1 },
        { args: ["ababc", "ac"], res: 0 },
        { args: ["aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxRepeating(...args)).toStrictEqual(res);
        });
    }
});
