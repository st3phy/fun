const { maxProfit } = require("../src/25-best-time-buy.js");

describe("Best Time To Buy And Sell Stock", () => {
    const tests = [
        { args: [[2, 9, 7, 1, 5, 3]], res: 7 },
        { args: [[7, 1, 5, 3, 6, 4]], res: 5 },
        { args: [[7, 6, 4, 3, 1]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxProfit(...args)).toStrictEqual(res);
        });
    }
});
