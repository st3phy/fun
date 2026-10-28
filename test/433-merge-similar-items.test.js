const { mergeSimilarItems } = require("../src/433-merge-similar-items.js");

describe("Merge Similar Items", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1],
                    [4, 5],
                    [3, 8]
                ],
                [
                    [3, 1],
                    [1, 5]
                ]
            ],
            res: [
                [1, 6],
                [3, 9],
                [4, 5]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mergeSimilarItems(...args)).toStrictEqual(res);
        });
    }
});
