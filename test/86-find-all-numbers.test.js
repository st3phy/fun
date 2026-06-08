const { findDisappearedNumbers } = require("../src/86-find-all-numbers.js");

describe("Find All Numbers Disappeared In An Array", () => {
    const tests = [
        { args: [[4, 3, 2, 7, 8, 2, 3, 1]], res: [5, 6] },
        { args: [[1, 1]], res: [2] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findDisappearedNumbers(...args)).toStrictEqual(res);
        });
    }
});
