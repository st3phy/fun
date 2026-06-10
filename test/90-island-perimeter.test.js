const { islandPerimeter } = require("../src/90-island-perimeter.js");

describe("Island Perimeter", () => {
    const tests = [
        {
            args: [
                [
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0]
                ]
            ],
            res: 16
        },
        { args: [[[1]]], res: 4 },
        { args: [[[1, 0]]], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(islandPerimeter(...args)).toStrictEqual(res);
        });
    }
});
