const { sortArrayByParity } = require("../src/163-sort-array-parity.js");

describe("Sort Array By Parity", () => {
    const tests = [
        { args: [[3, 1, 2, 4]], res: [2, 4, 3, 1] },
        { args: [[0]], res: [0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortArrayByParity(...args)).toStrictEqual(res);
        });
    }
});
