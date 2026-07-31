const { flipAndInvertImage } = require("../src/151-flipping-an-image.js");

describe("Flipping An Image", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1, 0],
                    [1, 0, 1],
                    [0, 0, 0]
                ]
            ],
            res: [
                [1, 0, 0],
                [0, 1, 0],
                [1, 1, 1]
            ]
        },
        {
            args: [
                [
                    [1, 1, 0, 0],
                    [1, 0, 0, 1],
                    [0, 1, 1, 1],
                    [1, 0, 1, 0]
                ]
            ],
            res: [
                [1, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 1],
                [1, 0, 1, 0]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(flipAndInvertImage(...args)).toStrictEqual(res);
        });
    }
});
