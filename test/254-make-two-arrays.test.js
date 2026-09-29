const { canBeEqual } = require("../src/254-make-two-arrays.js");

describe("Make Two Arrays Equal By Reversing Subarrays", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canBeEqual(...args)).toStrictEqual(res);
        });
    }
});
