const { romanToInt } = require("../src/3-roman-integer.js");

describe("Roman To Integer", () => {
    const tests = [
        { args: "III", res: 3 },
        { args: "LVIII", res: 58 },
        { args: "MCMXCIV", res: 1994 }
    ];

    for (const { args, res } of tests) {
        test(`${args}: ${res}`, () => {
            expect(romanToInt(args)).toStrictEqual(res);
        });
    }
});
