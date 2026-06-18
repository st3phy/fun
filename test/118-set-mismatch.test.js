const { findErrorNums } = require("../src/118-set-mismatch.js");

describe("Set Mismatch", () => {
    const tests = [
        { args: [[1, 2, 2, 4]], res: [2, 3] },
        { args: [[1, 1]], res: [1, 2] },
        { args: [[3, 2, 2]], res: [2, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findErrorNums(...args)).toStrictEqual(res);
        });
    }
});
