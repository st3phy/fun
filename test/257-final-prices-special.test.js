const { finalPrices } = require("../src/257-final-prices-special.js");

describe("Final Prices With A Special Discount In A Shop", () => {
    const tests = [
        { args: [[8, 4, 6, 2, 3]], res: [4, 2, 4, 2, 3] },
        { args: [[1, 2, 3, 4, 5]], res: [1, 2, 3, 4, 5] },
        { args: [[10, 1, 1, 6]], res: [9, 0, 1, 6] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(finalPrices(...args)).toStrictEqual(res);
        });
    }
});
