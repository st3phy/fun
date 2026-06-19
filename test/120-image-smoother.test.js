const { imageSmoother } = require("../src/120-image-smoother.js");

describe("Image Smoother", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1, 1],
                    [1, 0, 1],
                    [1, 1, 1]
                ]
            ],
            res: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        },
        {
            args: [
                [
                    [100, 200, 100],
                    [200, 50, 200],
                    [100, 200, 100]
                ]
            ],
            res: [
                [137, 141, 137],
                [141, 138, 141],
                [137, 141, 137]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(imageSmoother(...args)).toStrictEqual(res);
        });
    }
});
