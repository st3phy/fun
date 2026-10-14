const { replaceDigits } = require("../src/330-replace-all-digits.js");

describe("Replace All Digits With Characters", () => {
    const tests = [
        { args: ["a1c1e1"], res: "abcdef" },
        { args: ["a1b2c3d4e"], res: "abbdcfdhe" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(replaceDigits(...args)).toStrictEqual(res);
        });
    }
});
