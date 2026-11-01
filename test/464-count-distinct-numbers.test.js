const { distinctIntegers } = require("../src/464-count-distinct-numbers.js");

describe("Count Distinct Numbers On Board", () => {
    const tests = [
        { args: [5], res: 4 },
        { args: [3], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distinctIntegers(...args)).toStrictEqual(res);
        });
    }
});
