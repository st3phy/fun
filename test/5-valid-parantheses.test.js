const { isValid } = require("../src/5-valid-parantheses.js");

describe("Valid Parantheses", () => {
    const tests = [
        { args: "()", res: true },
        { args: "()[]{}", res: true },
        { args: "(]", res: false },
        { args: "([])", res: true },
        { args: "([)]", res: false }
    ];

    for (const { args, res } of tests) {
        test(`${args}: ${res}`, () => {
            expect(isValid(args)).toStrictEqual(res);
        });
    }
});
