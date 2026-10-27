const { strongPasswordCheckerII } = require("../src/428-strong-password-checker.js");

describe("Strong Password Checker II", () => {
    const tests = [
        { args: ["IloveLe3tcode!"], res: true },
        { args: ["Me+You--IsMyDream"], res: false },
        { args: ["1aB!"], res: false },
        { args: ["IloveLee3tcode!"], res: false },
        { args: ["lovee3tcode!"], res: false },
        { args: ["ILOVE3TCODE!"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(strongPasswordCheckerII(...args)).toStrictEqual(res);
        });
    }
});
