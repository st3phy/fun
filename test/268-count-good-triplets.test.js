const { countGoodTriplets } = require("../src/268-count-good-triplets.js");

describe("Count Good Triplets", () => {
    const tests = [
        { args: [[3, 0, 1, 1, 9, 7], 7, 2, 3], res: 4 },
        { args: [[1, 1, 2, 2, 3], 0, 0, 1], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countGoodTriplets(...args)).toStrictEqual(res);
        });
    }
});
