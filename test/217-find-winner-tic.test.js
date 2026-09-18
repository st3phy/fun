const { tictactoe } = require("../src/217-find-winner-tic.js");

describe("Find Winner On A Tic Tac Toe Game", () => {
    const tests = [
        {
            args: [
                [
                    [0, 0],
                    [2, 0],
                    [1, 1],
                    [2, 1],
                    [2, 2]
                ]
            ],
            res: "A"
        },
        {
            args: [
                [
                    [0, 0],
                    [1, 1],
                    [0, 1],
                    [0, 2],
                    [1, 0],
                    [2, 0]
                ]
            ],
            res: "B"
        },
        {
            args: [
                [
                    [0, 0],
                    [1, 1],
                    [2, 0],
                    [1, 0],
                    [1, 2],
                    [2, 1],
                    [0, 1],
                    [0, 2],
                    [2, 2]
                ]
            ],
            res: "Draw"
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(tictactoe(...args)).toStrictEqual(res);
        });
    }
});
