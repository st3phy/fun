const { shuffle } = require("../src/256-shuffle-array.js");

describe("Shuffle The Array", () => {
    const tests = [
        { args: [[2, 5, 1, 3, 4, 7], 3], res: [2, 3, 5, 4, 1, 7] },
        { args: [[1, 2, 3, 4, 4, 3, 2, 1], 4], res: [1, 4, 2, 3, 3, 2, 4, 1] },
        { args: [[1, 1, 2, 2], 2], res: [1, 2, 1, 2] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(shuffle(...args)).toStrictEqual(res);
        });
    }
});
