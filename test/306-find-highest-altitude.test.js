const { largestAltitude } = require("../src/306-find-highest-altitude.js");

describe("Find The Highest Altitude", () => {
    const tests = [
        { args: [[-5, 1, 5, 0, -7]], res: 1 },
        { args: [[-4, -3, -2, -1, 4, 3, 2]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestAltitude(...args)).toStrictEqual(res);
        });
    }
});
