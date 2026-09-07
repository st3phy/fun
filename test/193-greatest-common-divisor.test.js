const { gdcOfStrings } = require("../src/193-greatest-common-divisor.js");

describe("Greatest Common Divisor Of Strings", () => {
    const tests = [
        { args: ["ABCABC", "ABC"], res: "ABC" },
        { args: ["ABABAB", "ABAB"], res: "AB" },
        { args: ["LEET", "CODE"], res: "" },
        { args: ["AAAAAB", "AAA"], res: "" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(gdcOfStrings(...args)).toStrictEqual(res);
        });
    }
});
