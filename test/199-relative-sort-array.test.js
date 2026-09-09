const { relativeSortArray } = require("../src/199-relative-sort-array.js");

describe("Relative Sort Array", () => {
    const tests = [
        {
            args: [
                [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
                [2, 1, 4, 3, 9, 6]
            ],
            res: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
        },
        {
            args: [
                [28, 6, 22, 8, 44, 17],
                [22, 28, 8, 6]
            ],
            res: [22, 28, 8, 6, 17, 44]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(relativeSortArray(...args)).toStrictEqual(res);
        });
    }
});
