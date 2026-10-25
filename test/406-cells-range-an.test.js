const { cellsInRange } = require("../src/406-cells-range-an.js");

describe("Cells In A Range On An Excel Sheet", () => {
    const tests = [
        { args: ["K1:L2"], res: ["K1", "K2", "L1", "L2"] },
        { args: ["A1:F1"], res: ["A1", "B1", "C1", "D1", "E1", "F1"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(cellsInRange(...args)).toStrictEqual(res);
        });
    }
});
