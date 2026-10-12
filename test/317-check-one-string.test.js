const { areAlmostEqual } = require("../src/317-check-one-string.js");

describe("Check If One String Swap Can Make Strings Equal", () => {
    const tests = [
        { args: ["bank", "kanb"], res: true },
        { args: ["kelb", "kelb"], res: true },
        { args: ["attack", "defend"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(areAlmostEqual(...args)).toStrictEqual(res);
        });
    }
});
