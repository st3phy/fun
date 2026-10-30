const { oddString } = require("../src/453-odd-string-difference.js");

describe("Odd String Difference", () => {
    const tests = [
        { args: [["adc", "wzy", "abc"]], res: "abc" },
        { args: [["aaa", "bob", "ccc", "ddd"]], res: "bob" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(oddString(...args)).toStrictEqual(res);
        });
    }
});
