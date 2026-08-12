const { validMountainArray } = require("../src/171-valid-mountain-array.js");

describe("Valid Mountain Array", () => {
    const tests = [
        { args: [[2, 1]], res: false },
        { args: [[3, 5, 5]], res: false },
        { args: [[0, 3, 2, 1]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(validMountainArray(...args)).toStrictEqual(res);
        });
    }
});
