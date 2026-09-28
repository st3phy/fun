const { maxPower } = require("../src/251-consecutive-characters.js");

describe("Consecutive Characters", () => {
    const tests = [
        { args: ["leetcode"], res: 2 },
        { args: ["abbcccddddeeeeedcba"], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxPower(...args)).toStrictEqual(res);
        });
    }
});
