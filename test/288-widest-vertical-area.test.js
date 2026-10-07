const { maxWidthOfVerticalArea } = require("../src/288-widest-vertical-area.js");

describe("Widest Vertical Area Between Two Points Containing No Points", () => {
    const tests = [
        {
            args: [
                [
                    [8, 7],
                    [9, 9],
                    [7, 4],
                    [9, 7]
                ]
            ],
            res: 1
        },
        {
            args: [
                [
                    [3, 1],
                    [9, 0],
                    [1, 0],
                    [1, 4],
                    [5, 3],
                    [8, 8]
                ]
            ],
            res: 3
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxWidthOfVerticalArea(...args)).toStrictEqual(res);
        });
    }
});
