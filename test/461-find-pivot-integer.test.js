const { pivotInteger } = require("../src/461-find-pivot-integer.js");

describe("Find The Pivot Integer", () => {
    const tests = [
        { args: [8], res: 6 },
        { args: [1], res: 1 },
        { args: [4], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(pivotInteger(...args)).toStrictEqual(res);
        });
    }
});
