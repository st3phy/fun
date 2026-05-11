const { singleNumber } = require("../src/27-single-number.js");

describe("Single Number", () => {
    const tests = [
        { args: [[2, 2, 1]], res: 1 },
        { args: [[4, 1, 2, 1, 2]], res: 4 },
        { args: [[1]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(singleNumber(...args)).toStrictEqual(res);
        });
    }
});
