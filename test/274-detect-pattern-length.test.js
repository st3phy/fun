const { containsPattern } = require("../src/274-detect-pattern-length.js");

describe("Detect Pattern Of Length M Repeated K Or More Times", () => {
    const tests = [
        { args: [[1, 2, 4, 4, 4, 4], 1, 3], res: true },
        { args: [[1, 2, 1, 2, 1, 1, 1, 3], 2, 2], res: true },
        { args: [[1, 2, 3, 1, 2], 2, 2], res: false },
        { args: [[2, 2, 1, 2, 2, 1, 1, 1, 2, 1], 2, 2], res: false },
        { args: [[1, 2, 1, 2, 1, 3], 2, 3], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(containsPattern(...args)).toStrictEqual(res);
        });
    }
});
