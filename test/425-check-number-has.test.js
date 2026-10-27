const { digitCount } = require("../src/425-check-number-has.js");

describe("Check If Number Has Equal Digit Count And Digit Value", () => {
    const tests = [
        { args: ["1210"], res: true },
        { args: ["030"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(digitCount(...args)).toStrictEqual(res);
        });
    }
});
