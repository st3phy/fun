const { smallestEvenMultiple } = require("../src/445-smallest-even-multiple.js");

describe("Smallest Even Multiple", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(smallestEvenMultiple(...args)).toStrictEqual(res);
        });
    }
});
