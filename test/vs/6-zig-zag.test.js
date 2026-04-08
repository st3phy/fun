const { convert } = require("../src/6-zig-zag.js");

describe("Zigzag Conversion", () => {
    const tests = [
        { args: ["PAYPALISHIRING", 3], res: "PAHNAPLSIIGYIR" },
        { args: ["PAYPALISHIRING", 4], res: "PINALSIGYAHRPI" },
        { args: ["A", 1], res: "A" },
        { args: ["AB", 1], res: "AB" }
    ];

    for (const { args, res } of tests) {
        test(`${args}: ${res}`, () => {
            expect(convert(...args)).toStrictEqual(res);
        });
    }
});
