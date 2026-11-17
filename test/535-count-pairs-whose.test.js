const { countPairs } = require("../src/535-count-pairs-whose.js");

describe("Count Pairs Whose Sum Is Less Than Target", () => {
    const tests = [
        { args: [[-1, 1, 2, 3, 1], 2], res: 3 },
        { args: [[-6, 2, 5, -2, -7, -1, 3], -2], res: 10 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countPairs(...args)).toStrictEqual(res);
        });
    }
});
