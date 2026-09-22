const { arrayRankTransform } = require("../src/227-rank-transform-an.js");

describe("Rank Transform Of An Array", () => {
    const tests = [
        { args: [[40, 10, 20, 30]], res: [4, 1, 2, 3] },
        { args: [[100, 100, 100]], res: [1, 1, 1] },
        { args: [[100, 100, 99]], res: [2, 2, 1] },
        { args: [[37, 12, 28, 9, 100, 56, 80, 5, 12]], res: [5, 3, 4, 2, 8, 6, 7, 1, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(arrayRankTransform(...args)).toStrictEqual(res);
        });
    }
});
