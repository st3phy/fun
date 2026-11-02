const { minMaxDifference } = require("../src/476-maximum-difference-remapping.js");

describe("Maximum Difference By Remapping A Digit", () => {
    const tests = [
        { args: [11891], res: 99009 },
        { args: [90], res: 99 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minMaxDifference(...args)).toStrictEqual(res);
        });
    }
});
