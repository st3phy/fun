const { findEvenNumbers } = require("../src/383-finding-3-digit.js");

describe("Finding 3 Digit Even Numbers", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findEvenNumbers(...args)).toStrictEqual(res);
        });
    }
});
