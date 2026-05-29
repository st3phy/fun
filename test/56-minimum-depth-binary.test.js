const { minDepth } = require("../src/56-minimum-depth-binary.js");

describe("Minimum Depth Of Binary Tree", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minDepth(...args)).toStrictEqual(res);
        });
    }
});
