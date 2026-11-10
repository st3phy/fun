const { findNonMinOrMax } = require("../src/514-neither-minimum-nor.js");

describe("Neither Minimum Nor Maximum", () => {
    const tests = [
        { args: [[3, 2, 1, 4]], res: 3 },
        { args: [[1, 2]], res: -1 },
        { args: [[2, 1, 3]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findNonMinOrMax(...args)).toStrictEqual(res);
        });
    }
});
