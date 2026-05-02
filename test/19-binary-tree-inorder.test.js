const { inorderTraversal } = require("../src/19-binary-tree-inorder.js");

describe("Binary Tree Inorder Traversal", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(inorderTraversal(...args)).toStrictEqual(res);
        });
    }
});
