const { construct2DArray } = require("../src/369-convert-1d-array.js");

describe("Convert 1D Array Into 2D Array", () => {
    const tests = [
        {
            args: [[1, 2, 3, 4], 2, 2],
            res: [
                [1, 2],
                [3, 4]
            ]
        },
        { args: [[1, 2, 3], 1, 3], res: [[1, 2, 3]] },
        { args: [[1, 2], 1, 1], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(construct2DArray(...args)).toStrictEqual(res);
        });
    }
});
