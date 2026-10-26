const { largestInteger } = require("../src/412-largest-number-after.js");

describe("Largest Number After Digit Swaps By Parity", () => {
    const tests = [
        { args: [1234], res: 3412 },
        { args: [65875], res: 87655 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestInteger(...args)).toStrictEqual(res);
        });
    }
});
