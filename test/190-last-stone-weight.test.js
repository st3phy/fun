const { lastStoneWeight } = require("../src/190-last-stone-weight.js");

describe("Last Stone Weight", () => {
    const tests = [
        { args: [[2, 7, 4, 1, 8, 1]], res: 1 },
        {
            args: [
                [
                    1, 30, 400, 64, 2, 4, 633, 425, 634, 10, 100, 324, 9, 99, 99, 99, 524, 1, 2, 524, 252, 232, 53, 424,
                    1000, 1000
                ]
            ],
            res: 1
        },
        { args: [[1]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(lastStoneWeight(...args)).toStrictEqual(res);
        });
    }
});
