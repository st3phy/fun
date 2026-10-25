const { findKDistantIndices } = require("../src/407-find-all-k.js");

describe("Find All K Distant Indices In An Array", () => {
    const tests = [
        { args: [[3, 4, 9, 1, 3, 9, 5], 9, 1], res: [1, 2, 3, 4, 5, 6] },
        { args: [[2, 2, 2, 2, 2], 2, 2], res: [0, 1, 2, 3, 4] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findKDistantIndices(...args)).toStrictEqual(res);
        });
    }
});
