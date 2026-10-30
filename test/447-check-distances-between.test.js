const { checkDistances } = require("../src/447-check-distances-between.js");

describe("Check Distances Between Same Letters", () => {
    const tests = [
        { args: ["abaccb", [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], res: true },
        { args: ["aa", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkDistances(...args)).toStrictEqual(res);
        });
    }
});
