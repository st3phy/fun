const { minNumberOfHours } = require("../src/450-minimum-hours-training.js");

describe("Minimum Hours Of Training To Win A Competition", () => {
    const tests = [
        { args: [5, 3, [1, 4, 3, 2], [2, 6, 3, 1]], res: 8 },
        { args: [2, 4, [1], [3]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minNumberOfHours(...args)).toStrictEqual(res);
        });
    }
});
