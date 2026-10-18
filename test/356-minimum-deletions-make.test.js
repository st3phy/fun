const { minDeletion } = require("../src/356-minimum-deletions-make.js");

describe("Minimum Deletions To Make Array Sharp Leetcode", () => {
    const tests = [
        { args: [[1, 1, 2, 2, 2, 3]], res: 3 },
        { args: [[4, 4, 9, 4]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minDeletion(...args)).toStrictEqual(res);
        });
    }
});
