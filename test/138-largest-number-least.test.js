const { dominantIndex } = require("../src/138-largest-number-least.js");

describe("Largest Number At Least Twice Of Others", () => {
    const tests = [
        { args: [[3, 6, 1, 0]], res: 1 },
        { args: [[0, 0, 3, 2]], res: -1 },
        { args: [[1, 2, 3, 4]], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(dominantIndex(...args)).toStrictEqual(res);
        });
    }
});
