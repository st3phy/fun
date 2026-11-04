const { isWinner } = require("../src/489-determine-winner-bowling.js");

describe("Determine The Winner Of A Bowling Game", () => {
    const tests = [
        {
            args: [
                [5, 10, 3, 2],
                [6, 5, 7, 3]
            ],
            res: 1
        },
        {
            args: [
                [3, 5, 7, 6],
                [8, 10, 10, 2]
            ],
            res: 2
        },
        {
            args: [
                [2, 3],
                [4, 1]
            ],
            res: 0
        },
        {
            args: [
                [1, 1, 1, 10, 10, 10, 10],
                [10, 10, 10, 10, 1, 1, 1]
            ],
            res: 2
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isWinner(...args)).toStrictEqual(res);
        });
    }
});
