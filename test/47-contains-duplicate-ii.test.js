const { containsNearbyDuplicate } = require("../src/47-contains-duplicate-ii.js");

describe("Contains Duplicate II", () => {
    const tests = [
        { args: [[1, 2, 3, 1], 3], res: true },
        { args: [[1, 0, 1, 1], 1], res: true },
        { args: [[1, 2, 3, 1, 2, 3], 2], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(containsNearbyDuplicate(...args)).toStrictEqual(res);
        });
    }
});
