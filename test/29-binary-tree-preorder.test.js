const { preorderTraversal } = require("../src/29-binary-tree-preorder.js");

describe("Binary Tree Preorder Traversal", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(preorderTraversal(...args)).toStrictEqual(res);
        });
    }
});
