const { largestTriangleArea } = require("../src/146-largest-triangle-area.js");

describe("Largest Triangle Area", () => {
    const tests = [
        {
            args: [
                [
                    [0, 0],
                    [0, 1],
                    [1, 0],
                    [0, 2],
                    [2, 0]
                ]
            ],
            res: 2
        },
        {
            args: [
                [
                    [1, 0],
                    [0, 0],
                    [0, 1]
                ]
            ],
            res: 0.5
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestTriangleArea(...args)).toStrictEqual(res);
        });
    }
});
