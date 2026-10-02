const { diagonalSum } = require("../src/275-matrix-diagonal-sum.js");

describe("Matrix Diagonal Sum", () => {
    const tests = [{ args: [], res: false }];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(diagonalSum(...args)).toStrictEqual(res);
        });
    }
});
