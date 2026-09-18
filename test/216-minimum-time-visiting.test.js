const { minTimeToVisitAllPoints } = require("../src/216-minimum-time-visiting.js");

describe("Minimum Time Visiting All Points", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1],
                    [3, 4],
                    [-1, 0]
                ]
            ],
            res: 7
        },
        {
            args: [
                [
                    [3, 2],
                    [-2, 2]
                ]
            ],
            res: 5
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minTimeToVisitAllPoints(...args)).toStrictEqual(res);
        });
    }
});
