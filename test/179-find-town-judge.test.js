const { findJudge } = require("../src/179-find-town-judge.js");

describe("Find The Town Judge", () => {
    const tests = [
        { args: [2, [[1, 2]]], res: 2 },
        {
            args: [
                3,
                [
                    [1, 3],
                    [2, 3]
                ]
            ],
            res: 3
        },
        {
            args: [
                3,
                [
                    [1, 3],
                    [2, 3],
                    [3, 1]
                ]
            ],
            res: -1
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findJudge(...args)).toStrictEqual(res);
        });
    }
});
