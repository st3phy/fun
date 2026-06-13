const { reverseStr } = require("../src/105-reverse-string-ii.js");

describe("Reverse String II", () => {
    const tests = [
        { args: ["abcdefg", 2], res: "bacdfeg" },
        { args: ["abcd", 2], res: "bacd" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseStr(...args)).toStrictEqual(res);
        });
    }
});
