const { surfaceArea } = require("../src/161-surface-area-3d.js");

describe("Surface Area Of 3D Shapes", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [3, 4]
                ]
            ],
            res: 34
        },
        {
            args: [
                [
                    [1, 1, 1],
                    [1, 0, 1],
                    [1, 1, 1]
                ]
            ],
            res: 32
        },
        {
            args: [
                [
                    [2, 2, 2],
                    [2, 1, 2],
                    [2, 2, 2]
                ]
            ],
            res: 46
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(surfaceArea(...args)).toStrictEqual(res);
        });
    }
});
