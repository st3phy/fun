const { isSymmetric } = require("../src/21-symmetric-tree.js");

describe("Symmetric Tree", () => {
    const tests = [{ args: [], res: false }];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isSymmetric(...args)).toStrictEqual(res);
        });
    }
});
