const { countEven } = require("../src/403-count-integers-even.js");

describe("Count Integers With Even Digit Sum", () => {
    const tests = [
        { args: [4], res: 2 },
        { args: [30], res: 14 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countEven(...args)).toStrictEqual(res);
        });
    }
});
