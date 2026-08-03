const { projectionArea } = require("../src/158-projection-area-3d.js");

describe("Projection Area Of 3D Shapes", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [3, 4]
                ]
            ],
            res: 17
        },
        { args: [[[2]]], res: 5 },
        {
            args: [
                [
                    [1, 0],
                    [0, 2]
                ]
            ],
            res: 8
        },
        {
            args: [
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ]
            ],
            res: 51
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(projectionArea(...args)).toStrictEqual(res);
        });
    }
});
