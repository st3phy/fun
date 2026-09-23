const { kWeakestRows } = require("../src/229-k-weakest-rows.js");

describe("The K Weakest Rows In A Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1, 0, 0, 0],
                    [1, 1, 1, 1, 0],
                    [1, 0, 0, 0, 0],
                    [1, 1, 0, 0, 0],
                    [1, 1, 1, 1, 1]
                ],
                3
            ],
            res: [2, 0, 3]
        },
        {
            args: [
                [
                    [1, 0, 0, 0],
                    [1, 1, 1, 1],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0]
                ],
                2
            ],
            res: [0, 2]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(kWeakestRows(...args)).toStrictEqual(res);
        });
    }
});
