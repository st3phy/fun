const { findDelayedArrivalTime } = require("../src/492-calculate-delayed-arrival.js");

describe("Calculate Delayed Arrival Time", () => {
    const tests = [
        { args: [15, 5], res: 20 },
        { args: [13, 11], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findDelayedArrivalTime(...args)).toStrictEqual(res);
        });
    }
});
