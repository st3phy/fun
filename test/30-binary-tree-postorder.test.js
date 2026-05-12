const { postorderTraversal } = require("../src/30-binary-tree-postorder.js");

describe("Binary Tree Postorder Traversal", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(postorderTraversal(...args)).toStrictEqual(res);
        });
    }
});
