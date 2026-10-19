const { countQuadruplets } = require("../src/362-count-special-quadruplets.js");

describe("Count Special Quadruplets", () => {
    const tests = [
        { args: [[1, 2, 3, 6]], res: 1 },
        { args: [[3, 3, 6, 4, 5]], res: 0 },
        { args: [[1, 1, 1, 3, 5]], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countQuadruplets(...args)).toStrictEqual(res);
        });
    }
});
