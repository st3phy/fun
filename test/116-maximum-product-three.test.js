const { maximumProduct } = require("../src/116-maximum-product-three.js");

describe("Maximum Product Of Three Numbers", () => {
    const tests = [
        { args: [[1, 2, 3]], res: 6 },
        { args: [[1, 2, 3, 4]], res: 24 },
        { args: [[-1, -2, -3]], res: -6 },
        { args: [[-100, -98, -1, 2, 3, 4]], res: 39200 },
        { args: [[-100, -98, -1, 100, 99, 4]], res: 980000 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumProduct(...args)).toStrictEqual(res);
        });
    }
});
