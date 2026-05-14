const { convertToTitle } = require("../src/34-excel-sheet-column.js");

describe("Excel Sheet Column Title", () => {
    const tests = [
        { args: [[1]], res: "A" },
        { args: [[28]], res: "AB" },
        { args: [[701]], res: "ZY" },
        { args: [[703]], res: "AAA" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(convertToTitle(...args)).toStrictEqual(res);
        });
    }
});
