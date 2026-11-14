const { alternatingSubarray } = require("../src/520-longest-alternating-subarray.js");

describe("Longest Alternating Subarray", () => {
    const tests = [
        { args: [[2, 3, 4, 3, 4]], res: 4 },
        { args: [[4, 5, 6]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(alternatingSubarray(...args)).toStrictEqual(res);
        });
    }
});
