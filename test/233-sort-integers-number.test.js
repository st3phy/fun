const { sortByBits } = require("../src/233-sort-integers-number.js");

describe("Sort Integers By The Number Of 1 Bits", () => {
    const tests = [
        { args: [[0, 1, 2, 3, 4, 5, 6, 7, 8]], res: [0, 1, 2, 4, 8, 3, 5, 6, 7] },
        { args: [[1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]], res: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortByBits(...args)).toStrictEqual(res);
        });
    }
});
