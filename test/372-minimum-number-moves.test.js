const { minMovesToSeat } = require("../src/372-minimum-number-moves.js");

describe("Minimum Number Of Moves To Seat Everyone", () => {
    const tests = [
        {
            args: [
                [3, 1, 5],
                [2, 7, 4]
            ],
            res: 4
        },
        {
            args: [
                [4, 1, 5, 9],
                [1, 3, 2, 6]
            ],
            res: 7
        },
        {
            args: [
                [2, 2, 6, 6],
                [1, 3, 2, 6]
            ],
            res: 4
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minMovesToSeat(...args)).toStrictEqual(res);
        });
    }
});
