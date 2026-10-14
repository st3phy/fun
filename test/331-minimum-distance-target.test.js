const { getMinDistance } = require("../src/331-minimum-distance-target.js");

describe("Minimum Distance To The Target Element", () => {
    const tests = [
        { args: [[1, 2, 3, 4, 5], 5, 3], res: 1 },
        { args: [[1], 1, 0], res: 0 },
        { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getMinDistance(...args)).toStrictEqual(res);
        });
    }
});
