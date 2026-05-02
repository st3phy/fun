const { merge } = require("../src/18-merge-sorted-array.js");

describe("Merge Sorted Array", () => {
    const tests = [
        { args: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], res: [1, 2, 2, 3, 5, 6] },
        { args: [[1], 2, [], 0], res: [1] },
        { args: [[0], 0, [1], 1], res: [1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(merge(...args)).toStrictEqual(res);
        });
    }
});
