const { duplicateZeros } = require("../src/195-duplicate-zeros.js");

describe("Duplicate Zeros", () => {
    const tests = [
        { args: [[1, 0, 2, 3, 0, 4, 5, 0]], res: [1, 0, 0, 2, 3, 0, 0, 4] },
        { args: [[1, 2, 3]], res: [1, 2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(duplicateZeros(...args)).toStrictEqual(res);
        });
    }
});
