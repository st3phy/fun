const { allCellsDistOrder } = require("../src/188-matrix-cells-distance.js");

describe("Matrix Cells In Distance Order", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(allCellsDistOrder(...args)).toStrictEqual(res);
        });
    }
});
