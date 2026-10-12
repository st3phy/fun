const { secondHighest } = require("../src/319-second-largest-digit.js");

describe("Second Largest Digit In A String", () => {
    const tests = [
        { args: ["dfa12321afd"], res: 2 },
        { args: ["abc1111"], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(secondHighest(...args)).toStrictEqual(res);
        });
    }
});
