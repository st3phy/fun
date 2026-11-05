const { chunk } = require("../src/498-chunk-array.js");

describe("Chunk Array", () => {
    const tests = [
        { args: [[1, 2, 3, 4, 5], 1], res: [[1], [2], [3], [4], [5]] },
        {
            args: [[1, 9, 6, 3, 2], 3],
            res: [
                [1, 9, 6],
                [3, 2]
            ]
        },
        { args: [[8, 5, 3, 2, 6], 6], res: [[8, 5, 3, 2, 6]] },
        { args: [[], 1], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(chunk(...args)).toStrictEqual(res);
        });
    }
});
