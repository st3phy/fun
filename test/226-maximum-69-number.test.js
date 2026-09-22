const { maximum69Number } = require("../src/226-maximum-69-number.js");

describe("Maximum 69 Number", () => {
    const tests = [
        { args: [9669], res: 9969 },
        { args: [9999], res: 9999 },
        { args: [9996], res: 9999 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximum69Number(...args)).toStrictEqual(res);
        });
    }
});
