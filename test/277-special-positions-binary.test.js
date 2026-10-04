const { numSpecial } = require("../src/277-special-positions-binary.js");

describe("Special Positions In A Binary Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [1, 0, 0],
                    [0, 0, 1],
                    [1, 0, 0]
                ]
            ],
            res: 1
        },
        {
            args: [
                [
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1]
                ]
            ],
            res: 3
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numSpecial(...args)).toStrictEqual(res);
        });
    }
});
