const { findSubarrays } = require("../src/448-find-subarrays-equal.js");

describe("Find Subarrays With Equal Sum", () => {
    const tests = [
        { args: [[4, 2, 4]], res: true },
        { args: [[1, 2, 3, 4, 5]], res: false },
        { args: [[0, 0, 0]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findSubarrays(...args)).toStrictEqual(res);
        });
    }
});
