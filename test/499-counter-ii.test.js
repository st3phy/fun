const { createCounter } = require("../src/499-counter-ii.js");

describe("Counter II", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(createCounter(...args)).toStrictEqual(res);
        });
    }
});
