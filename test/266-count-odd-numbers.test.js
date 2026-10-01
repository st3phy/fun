const { countOdds } = require("../src/266-count-odd-numbers.js");

describe("Count Odd Numbers In An Interval Range", () => {
    const tests = [
        { args: [3, 7], res: 3 },
        { args: [8, 10], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countOdds(...args)).toStrictEqual(res);
        });
    }
});
