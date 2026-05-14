const { postorderTraversal } = require("../src/32-binary-tree-postorder.js");

describe("Binary Tree Postorder Traversal Iterative Solution", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(postorderTraversal(...args)).toStrictEqual(res);
        });
    }
});
