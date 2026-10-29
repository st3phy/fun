const { hardestWorker } = require("../src/441-employee-that-worked.js");

describe("The Employee That Worked On The Longest Task", () => {
    const tests = [
        {
            args: [
                10,
                [
                    [0, 3],
                    [2, 5],
                    [0, 9],
                    [1, 15]
                ]
            ],
            res: 1
        },
        {
            args: [
                26,
                [
                    [1, 1],
                    [3, 7],
                    [2, 12],
                    [7, 17]
                ]
            ],
            res: 3
        },
        {
            args: [
                2,
                [
                    [0, 10],
                    [1, 20]
                ]
            ],
            res: 0
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(hardestWorker(...args)).toStrictEqual(res);
        });
    }
});
