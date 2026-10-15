const { largestOddNumber } = require("../src/342-largest-odd-number.js");

describe("Largest Odd Number In String", () => {
    const tests = [
        { args: ["52"], res: "5" },
        { args: ["4206"], res: "" },
        { args: ["35427"], res: "35427" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestOddNumber(...args)).toStrictEqual(res);
        });
    }
});
