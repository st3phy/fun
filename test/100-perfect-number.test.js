const { checkPerfectNumber } = require("../src/100-perfect-number.js");

describe("Perfect Number", () => {
    const tests = [
        { args: [28], res: true },
        { args: [7], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkPerfectNumber(...args)).toStrictEqual(res);
        });
    }
});
