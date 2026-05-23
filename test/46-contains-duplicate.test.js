const { containsDuplicate } = require("../src/46-contains-duplicate.js");

describe("Contains Duplicate", () => {
    const tests = [
        { args: [[1, 2, 3, 1]], res: true },
        { args: [[1, 2, 3, 4]], res: false },
        { args: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(containsDuplicate(...args)).toStrictEqual(res);
        });
    }
});
