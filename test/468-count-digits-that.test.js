const { countDigits } = require("../src/468-count-digits-that.js");

describe("Count The Digits That Divide A Number", () => {
    const tests = [
        { args: [7], res: 1 },
        { args: [121], res: 2 },
        { args: [1248], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countDigits(...args)).toStrictEqual(res);
        });
    }
});
