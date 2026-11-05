const { distinctDifferenceArray } = require("../src/496-find-distinct-difference.js");

describe("Find The Distinct Difference Array", () => {
    const tests = [
        { args: [[1, 2, 3, 4, 5]], res: [-3, -1, 1, 3, 5] },
        { args: [[3, 2, 3, 4, 2]], res: [-2, -1, 0, 2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distinctDifferenceArray(...args)).toStrictEqual(res);
        });
    }
});
