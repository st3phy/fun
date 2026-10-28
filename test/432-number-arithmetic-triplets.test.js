const { arithmeticTriplets } = require("../src/432-number-arithmetic-triplets.js");

describe("Number Of Arithmetic Triplets", () => {
    const tests = [
        { args: [[0, 1, 4, 6, 7, 10], 3], res: 2 },
        { args: [[4, 5, 6, 7, 8, 9], 2], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(arithmeticTriplets(...args)).toStrictEqual(res);
        });
    }
});
