const { intersection } = require("../src/416-intersection-multiple-arrays.js");

describe("Intersection Of Multiple Arrays", () => {
    const tests = [
        {
            args: [
                [
                    [3, 1, 2, 4, 5],
                    [1, 2, 3, 4],
                    [3, 4, 5, 6]
                ]
            ],
            res: [3, 4]
        },
        {
            args: [
                [
                    [1, 2, 3],
                    [4, 5, 6]
                ]
            ],
            res: []
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(intersection(...args)).toStrictEqual(res);
        });
    }
});
