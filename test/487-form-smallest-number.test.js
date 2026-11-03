const { minNumber } = require("../src/487-form-smallest-number.js");

describe("Form Smallest Number From Two Digit Arrays", () => {
    const tests = [
        {
            args: [
                [4, 1, 3],
                [5, 7]
            ],
            res: 15
        },
        {
            args: [
                [3, 5, 2, 6],
                [3, 1, 7]
            ],
            res: 3
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minNumber(...args)).toStrictEqual(res);
        });
    }
});
