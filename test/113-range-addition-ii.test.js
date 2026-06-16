const { maxCount } = require("../src/113-range-addition-ii.js");

describe("Range Addition II", () => {
    const tests = [
        {
            args: [
                3,
                2,
                [
                    [2, 2],
                    [3, 3]
                ]
            ],
            res: 4
        },
        {
            args: [
                3,
                3,
                [
                    [2, 2],
                    [3, 3],
                    [3, 3],
                    [3, 3],
                    [2, 2],
                    [3, 3],
                    [3, 3],
                    [3, 3],
                    [2, 2],
                    [3, 3],
                    [3, 3],
                    [3, 3]
                ]
            ],
            res: 4
        },
        { args: [3, 3, []], res: 9 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxCount(...args)).toStrictEqual(res);
        });
    }
});
