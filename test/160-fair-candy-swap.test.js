const { fairCandySwap } = require("../src/160-fair-candy-swap.js");

describe("Fair Candy Swap", () => {
    const tests = [
        {
            args: [
                [1, 1],
                [2, 2]
            ],
            res: [1, 2]
        },
        {
            args: [
                [1, 2],
                [2, 3]
            ],
            res: [1, 2]
        },
        { args: [[2], [1, 3]], res: [2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(fairCandySwap(...args)).toStrictEqual(res);
        });
    }
});
