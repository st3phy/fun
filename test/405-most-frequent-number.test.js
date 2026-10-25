const { mostFrequent } = require("../src/405-most-frequent-number.js");

describe("Most Frequent Number Following Key In An Array", () => {
    const tests = [
        { args: [[1, 100, 200, 1, 100], 1], res: 100 },
        { args: [[2, 2, 2, 2, 3], 2], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mostFrequent(...args)).toStrictEqual(res);
        });
    }
});
