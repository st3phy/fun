const { findFinalValue } = require("../src/397-keep-multiplying-found.js");

describe("Keep Multiplying Found Values By Two", () => {
    const tests = [
        { args: [[5, 3, 6, 1, 12], 3], res: 24 },
        { args: [[2, 7, 9], 4], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findFinalValue(...args)).toStrictEqual(res);
        });
    }
});
