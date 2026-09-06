const { heightChecker } = require("../src/192-height-checker.js");

describe("Height Checker", () => {
    const tests = [
        { args: [[1, 1, 4, 2, 1, 3]], res: 3 },
        { args: [[5, 1, 2, 3, 4]], res: 5 },
        { args: [[1, 2, 3, 4, 5]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(heightChecker(...args)).toStrictEqual(res);
        });
    }
});
