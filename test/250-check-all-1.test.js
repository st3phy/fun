const { kLengthApart } = require("../src/250-check-all-1.js");

describe("Check If All 1 S Are At Least Length K Places Away", () => {
    const tests = [
        { args: [[1, 0, 0, 0, 1, 0, 0, 1], 2], res: true },
        { args: [[1, 0, 0, 1, 0, 1], 2], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(kLengthApart(...args)).toStrictEqual(res);
        });
    }
});
