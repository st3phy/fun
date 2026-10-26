const { digitSum } = require("../src/415-calculate-digit-sum.js");

describe("Calculate Digit Sum Of A String", () => {
    const tests = [
        { args: ["11111222223", 3], res: "135" },
        { args: ["00000000", 3], res: "000" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(digitSum(...args)).toStrictEqual(res);
        });
    }
});
