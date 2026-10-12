const { findCenter } = require("../src/318-find-center-star.js");

describe("Find Center Of Star Graph", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [2, 3],
                    [4, 2]
                ]
            ],
            res: 2
        },
        {
            args: [
                [
                    [1, 2],
                    [5, 1],
                    [1, 3],
                    [1, 4]
                ]
            ],
            res: 1
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findCenter(...args)).toStrictEqual(res);
        });
    }
});
