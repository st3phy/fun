const { targetIndices } = require("../src/363-find-target-indices.js");

describe("Find Target Indices After Sorting Array", () => {
    const tests = [
        { args: [[1, 2, 5, 2, 3], 2], res: [1, 2] },
        { args: [[1, 2, 5, 2, 3], 3], res: [3] },
        { args: [[1, 2, 5, 2, 3], 5], res: [4] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(targetIndices(...args)).toStrictEqual(res);
        });
    }
});
