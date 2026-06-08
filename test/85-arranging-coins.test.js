const { arrangeCoins } = require("../src/85-arranging-coins.js");

describe("Arranging Coins", () => {
    const tests = [
        { args: [5], res: 2 },
        { args: [8], res: 3 },
        { args: [15], res: 5 },
        { args: [18], res: 5 },
        { args: [24], res: 6 },
        { args: [29], res: 7 },
        { args: [1], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(arrangeCoins(...args)).toStrictEqual(res);
        });
    }
});
