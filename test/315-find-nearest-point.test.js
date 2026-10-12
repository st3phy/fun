const { nearestValidPoint } = require("../src/315-find-nearest-point.js");

describe("Find Nearest Point That Has The Same X Or Y Coordinate", () => {
    const tests = [
        {
            args: [
                3,
                4,
                [
                    [1, 2],
                    [3, 1],
                    [2, 4],
                    [2, 3],
                    [4, 4]
                ]
            ],
            res: 2
        },
        { args: [3, 4, [[3, 4]]], res: 0 },
        { args: [3, 4, [[2, 3]]], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(nearestValidPoint(...args)).toStrictEqual(res);
        });
    }
});
