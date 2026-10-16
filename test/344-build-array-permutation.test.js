const { buildArray } = require("../src/344-build-array-permutation.js");

describe("Build Array From Permutation", () => {
    const tests = [
        { args: [[0, 2, 1, 5, 3, 4]], res: [0, 1, 2, 4, 5, 3] },
        { args: [[5, 0, 1, 2, 3, 4]], res: [4, 5, 0, 1, 2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(buildArray(...args)).toStrictEqual(res);
        });
    }
});
