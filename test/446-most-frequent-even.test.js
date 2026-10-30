const { mostFrequentEven } = require("../src/446-most-frequent-even.js");

describe("Most Frequent Even Element", () => {
    const tests = [
        { args: [[0, 1, 2, 2, 4, 4, 1]], res: 2 },
        { args: [[4, 4, 4, 9, 2, 4]], res: 4 },
        { args: [[29, 47, 21, 41, 13, 37, 25, 7]], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mostFrequentEven(...args)).toStrictEqual(res);
        });
    }
});
