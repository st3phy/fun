const { numberOfLines } = require("../src/145-number-lines-write.js");

describe("Number Of Lines To Write String", () => {
    const tests = [
        {
            args: [
                [
                    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                    10
                ],
                "abcdefghijklmnopqrstuvwxyz"
            ],
            res: [3, 60]
        },
        {
            args: [
                [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                "bbbcccdddaaa"
            ],
            res: [2, 4]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numberOfLines(...args)).toStrictEqual(res);
        });
    }
});
