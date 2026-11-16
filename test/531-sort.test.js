const { sortBy } = require("../src/531-sort.js");

describe("Sort By", () => {
    const tests = [
        { args: [[5, 4, 1, 2, 3], x => x], res: [1, 2, 3, 4, 5] },
        { args: [[{ x: 1 }, { x: 0 }, { x: -1 }], d => d.x], res: [{ x: -1 }, { x: 0 }, { x: 1 }] },
        {
            args: [
                [
                    [3, 4],
                    [5, 2],
                    [10, 1]
                ],
                x => x[1]
            ],
            res: [
                [10, 1],
                [5, 2],
                [3, 4]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortBy(...args)).toStrictEqual(res);
        });
    }
});
