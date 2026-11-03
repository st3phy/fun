const { evenOddBit } = require("../src/483-number-even-odd.js");

describe("Number Of Even And Odd Bits", () => {
    const tests = [
        { args: [50], res: [1, 2] },
        { args: [2], res: [0, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(evenOddBit(...args)).toStrictEqual(res);
        });
    }
});
