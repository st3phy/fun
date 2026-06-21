const { findShortestSubArray } = require("../src/126-degree-an-array.js");

describe("Degree Of An Array", () => {
    const tests = [
        { args: [[1, 2, 2, 3, 1]], res: 1 },
        { args: [[1, 2, 2, 3, 1, 4, 2]], res: 6 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findShortestSubArray(...args)).toStrictEqual(res);
        });
    }
});
