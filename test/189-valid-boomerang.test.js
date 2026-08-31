const { isBoomerang } = require("../src/189-valid-boomerang.js");

describe("Valid Boomerang", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1],
                    [2, 3],
                    [3, 2]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [0, 0],
                    [0, 2],
                    [2, 1]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [1, 1],
                    [2, 2],
                    [3, 3]
                ]
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isBoomerang(...args)).toStrictEqual(res);
        });
    }
});
