const { findColumnWidth } = require("../src/495-find-width-columns.js");

describe("Find The Width Of Columns Of A Grid", () => {
    const tests = [
        { args: [[[1], [22], [333]]], res: [3] },
        {
            args: [
                [
                    [-15, 1, 3],
                    [15, 7, 12],
                    [5, 6, -2]
                ]
            ],
            res: [3, 1, 2]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findColumnWidth(...args)).toStrictEqual(res);
        });
    }
});
