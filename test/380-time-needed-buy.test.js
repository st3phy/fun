const { timeRequiredToBuy } = require("../src/380-time-needed-buy.js");

describe("Time Needed To Buy Tickets", () => {
    const tests = [
        { args: [[2, 3, 2], 2], res: 6 },
        { args: [[5, 1, 1, 1], 0], res: 8 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(timeRequiredToBuy(...args)).toStrictEqual(res);
        });
    }
});
