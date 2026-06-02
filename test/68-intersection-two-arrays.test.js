const { intersection } = require("../src/68-intersection-two-arrays.js");

describe("Intersection Of Two Arrays", () => {
    const tests = [
        {
            args: [
                [1, 2, 2, 1],
                [2, 2]
            ],
            res: [2]
        },
        {
            args: [
                [4, 9, 5],
                [9, 4, 9, 8, 4]
            ],
            res: [4, 9]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(intersection(...args)).toStrictEqual(res);
        });
    }
});
