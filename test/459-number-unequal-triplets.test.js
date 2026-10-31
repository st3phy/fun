const { unequalTriplets } = require("../src/459-number-unequal-triplets.js");

describe("Number Of Unequal Triplets In Array", () => {
    const tests = [
        { args: [[4, 4, 2, 4, 3]], res: 3 },
        { args: [[1, 1, 1, 1, 1]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(unequalTriplets(...args)).toStrictEqual(res);
        });
    }
});
