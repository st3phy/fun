const { sumCounts } = require("../src/338-subarrays-distinct-element.js");

describe("Subarrays Distinct Element Sum Of Squares I", () => {
    const tests = [
        { args: [[1, 2, 1]], res: 15 },
        { args: [[1, 1]], res: 3 },
        { args: [[1, 2, 2, 2]], res: 19 },
        { args: [[1, 2, 3, 3]], res: 35 },
        { args: [[1, 2, 3, 4]], res: 50 },
        { args: [[1, 2, 3]], res: 20 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumCounts(...args)).toStrictEqual(res);
        });
    }
});
