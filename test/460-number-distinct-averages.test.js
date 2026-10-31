const { distinctAverages } = require("../src/460-number-distinct-averages.js");

describe("Number Of Distinct Averages", () => {
    const tests = [
        { args: [[4, 1, 4, 0, 3, 5]], res: 2 },
        { args: [[1, 100]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distinctAverages(...args)).toStrictEqual(res);
        });
    }
});
