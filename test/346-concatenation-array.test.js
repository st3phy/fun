const { getConcatenation } = require("../src/346-concatenation-array.js");

describe("Concatenation Of Array", () => {
    const tests = [
        { args: [[1, 2, 1]], res: [1, 2, 1, 1, 2, 1] },
        { args: [[1, 3, 2, 1]], res: [1, 3, 2, 1, 1, 3, 2, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getConcatenation(...args)).toStrictEqual(res);
        });
    }
});
