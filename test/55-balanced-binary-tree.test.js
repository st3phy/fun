const { isBalanced } = require("../src/55-balanced-binary-tree.js");

describe("Balanced Binary Tree", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isBalanced(...args)).toStrictEqual(res);
        });
    }
});
