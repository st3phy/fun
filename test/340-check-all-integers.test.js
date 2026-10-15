const { isCovered } = require("../src/340-check-all-integers.js");

describe("Check If All The Integers In A Range Are Covered", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [3, 4],
                    [5, 6]
                ],
                2,
                5
            ],
            res: true
        },
        {
            args: [
                [
                    [1, 10],
                    [10, 20]
                ],
                21,
                21
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isCovered(...args)).toStrictEqual(res);
        });
    }
});
