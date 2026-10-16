const { isThree } = require("../src/350-three-divisors.js");

describe("Three Divisors", () => {
    const tests = [
        { args: [2], res: false },
        { args: [1], res: false },
        { args: [4], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isThree(...args)).toStrictEqual(res);
        });
    }
});
