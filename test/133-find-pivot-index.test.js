const { pivotIndex } = require("../src/133-find-pivot-index.js");

describe("Find Pivot Index", () => {
    const tests = [
        { args: [[1, 7, 3, 6, 5, 6]], res: 3 },
        { args: [[1, 2, 3]], res: -1 },
        { args: [[2, -1, 1]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(pivotIndex(...args)).toStrictEqual(res);
        });
    }
});
