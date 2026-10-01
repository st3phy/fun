const { findKthPositive } = require("../src/269-kth-missing-positive.js");

describe("Kth Missing Positive Number", () => {
    const tests = [
        { args: [[2, 3, 4, 7, 11], 5], res: 9 },
        { args: [[1, 2, 3, 4], 2], res: 6 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findKthPositive(...args)).toStrictEqual(res);
        });
    }
});
