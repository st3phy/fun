const { largestGoodInteger } = require("../src/418-largest-3-same.js");

describe("Largest 3 Same Digit Number In String", () => {
    const tests = [
        { args: ["6777133339"], res: "777" },
        { args: ["2300019"], res: "000" },
        { args: ["42352338"], res: "" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestGoodInteger(...args)).toStrictEqual(res);
        });
    }
});
