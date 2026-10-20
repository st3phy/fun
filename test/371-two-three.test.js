const { twoOutOfThree } = require("../src/371-two-three.js");

describe("Two Out Of Three", () => {
    const tests = [
        { args: [[1, 1, 3, 2], [2, 3], [3]], res: [3, 2] },
        {
            args: [
                [3, 1],
                [2, 3],
                [1, 2]
            ],
            res: [2, 3, 1]
        },
        { args: [[1, 2, 2], [4, 3, 3], [5]], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(twoOutOfThree(...args)).toStrictEqual(res);
        });
    }
});
