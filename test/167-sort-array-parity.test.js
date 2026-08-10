const { sortArrayByParityII } = require("../src/167-sort-array-parity.js");

describe("Sort Array By Parity II", () => {
    const tests = [
        { args: [[4, 2, 5, 7]], res: [4, 5, 2, 7] },
        { args: [[2, 3]], res: [2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortArrayByParityII(...args)).toEqual(res);
        });
    }
});
