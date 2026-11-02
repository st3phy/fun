const { findTheArrayConcVal } = require("../src/475-find-array-concatenation.js");

describe("Find The Array Concatenation Value", () => {
    const tests = [
        { args: [[7, 52, 2, 4]], res: 596 },
        { args: [[5, 14, 13, 8, 12]], res: 673 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findTheArrayConcVal(...args)).toStrictEqual(res);
        });
    }
});
