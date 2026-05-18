const { titleToNumber } = require("../src/37-excel-sheet-column.js");

describe("Excel Sheet Column Number", () => {
    const tests = [
        { args: ["A"], res: 1 },
        { args: ["AB"], res: 28 },
        { args: ["ZY"], res: 701 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(titleToNumber(...args)).toStrictEqual(res);
        });
    }
});
