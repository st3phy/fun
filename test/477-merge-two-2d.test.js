const { mergeArrays } = require("../src/477-merge-two-2d.js");

describe("Merge Two 2D Arrays By Summing Values", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [2, 3],
                    [4, 5]
                ],
                [
                    [1, 4],
                    [3, 2],
                    [4, 1]
                ]
            ],
            res: [
                [1, 6],
                [2, 3],
                [3, 2],
                [4, 6]
            ]
        },
        {
            args: [
                [
                    [2, 4],
                    [3, 6],
                    [5, 5]
                ],
                [
                    [1, 3],
                    [4, 3]
                ]
            ],
            res: [
                [1, 3],
                [2, 4],
                [3, 6],
                [4, 3],
                [5, 5]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mergeArrays(...args)).toStrictEqual(res);
        });
    }
});
