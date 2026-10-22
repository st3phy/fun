const { checkString } = require("../src/389-check-all-s.js");

describe("Check If All A S Appears Before All B S", () => {
    const tests = [
        { args: ["aaabbb"], res: true },
        { args: ["abab"], res: false },
        { args: ["bbb"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkString(...args)).toStrictEqual(res);
        });
    }
});
