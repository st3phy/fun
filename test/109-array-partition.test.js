const { arrayPairSum } = require("../src/109-array-partition.js");

describe("Array Partition", () => {
    const tests = [
        { args: [[1, 4, 3, 2]], res: 4 },
        { args: [[6, 2, 6, 5, 1, 2]], res: 9 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(arrayPairSum(...args)).toStrictEqual(res);
        });
    }
});
