const { semiOrderedPermutation } = require("../src/504-semi-ordered-permutation.js");

describe("Semi Ordered Permutation", () => {
    const tests = [
        { args: [[2, 1, 4, 3]], res: 2 },
        { args: [[2, 4, 1, 3]], res: 3 },
        { args: [[1, 3, 4, 2, 5]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(semiOrderedPermutation(...args)).toStrictEqual(res);
        });
    }
});
