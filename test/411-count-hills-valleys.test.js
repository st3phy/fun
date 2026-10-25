const { countHillValley } = require("../src/411-count-hills-valleys.js");

describe("Count Hills And Valleys In An Array", () => {
    const tests = [
        { args: [[2, 4, 1, 1, 6, 5]], res: 3 },
        { args: [[6, 6, 5, 5, 4, 1]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countHillValley(...args)).toStrictEqual(res);
        });
    }
});
