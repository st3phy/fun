const { checkStraightLine } = require("../src/213-check-it-is.js");

describe("Check If It Is A Straight Line", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [2, 3],
                    [3, 4],
                    [4, 5],
                    [5, 6],
                    [6, 7]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [1, 2],
                    [6, 7],
                    [2, 3],
                    [3, 4],
                    [4, 5],
                    [5, 6]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [2, 4],
                    [2, 5],
                    [2, 8]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [1, -8],
                    [2, -3],
                    [1, 2]
                ]
            ],
            res: false
        },
        {
            args: [
                [
                    [1, 1],
                    [2, 2],
                    [3, 4],
                    [4, 5],
                    [5, 6],
                    [7, 7]
                ]
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkStraightLine(...args)).toStrictEqual(res);
        });
    }
});
