const { findLucky } = require("../src/241-find-lucky-integer.js");

describe("Find Lucky Integer In An Array", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findLucky(...args)).toStrictEqual(res);
        });
    }
});
