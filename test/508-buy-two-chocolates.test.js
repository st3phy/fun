const { buyChoco } = require("../src/508-buy-two-chocolates.js");

describe("Buy Two Chocolates", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(buyChoco(...args)).toStrictEqual(res);
        });
    }
});
