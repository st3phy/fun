const { maxDepth } = require("../src/108-maximum-depth-n.js");

describe("Maximum Depth Of N Ary Tree", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxDepth(...args)).toStrictEqual(res);
        });
    }
});
