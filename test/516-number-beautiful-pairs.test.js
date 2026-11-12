const { countBeautifulPairs } = require("../src/516-number-beautiful-pairs.js");

describe("Number Of Beautiful Pairs", () => {
    const tests = [
        { args: [[2, 5, 1, 4]], res: 5 },
        { args: [[11, 21, 12]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countBeautifulPairs(...args)).toStrictEqual(res);
        });
    }
});
