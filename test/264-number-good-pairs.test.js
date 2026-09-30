const { numIdenticalPairs } = require("../src/264-number-good-pairs.js");

describe("Number Of Good Pairs", () => {
    const tests = [
        { args: [[1, 2, 3, 1, 1, 3]], res: 4 },
        { args: [[1, 1, 1, 1]], res: 6 },
        { args: [[1, 2, 3]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numIdenticalPairs(...args)).toStrictEqual(res);
        });
    }
});
