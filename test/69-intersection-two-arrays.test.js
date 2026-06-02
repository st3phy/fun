const { intersect } = require("../src/69-intersection-two-arrays.js");

describe("Intersection Of Two Arrays II", () => {
    const tests = [
        {
            args: [
                [1, 2, 2, 1],
                [2, 2]
            ],
            res: [2, 2]
        },
        {
            args: [
                [4, 9, 5],
                [9, 4, 9, 8, 4]
            ],
            res: [9, 4]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(intersect(...args)).toStrictEqual(res);
        });
    }
});
