const { validPath } = require("../src/355-find-path-exists.js");

describe("Find If Path Exists In Graph", () => {
    const tests = [
        {
            args: [
                3,
                [
                    [0, 1],
                    [1, 2],
                    [2, 0]
                ],
                0,
                2
            ],
            res: true
        },
        {
            args: [
                6,
                [
                    [0, 1],
                    [0, 2],
                    [3, 5],
                    [5, 4],
                    [4, 3]
                ],
                0,
                5
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(validPath(...args)).toStrictEqual(res);
        });
    }
});
