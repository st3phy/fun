const { maxDepth } = require("../src/22-maximum-depth-binary.js");

describe("Maximum Depth Of Binary Tree", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxDepth(...args)).toStrictEqual(res);
        });
    }
});
