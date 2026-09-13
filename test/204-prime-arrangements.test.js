const { numPrimeArrangements } = require("../src/204-prime-arrangements.js");

describe("Prime Arrangements", () => {
    const tests = [
        { args: [5], res: 12 },
        { args: [100], res: 682289015 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numPrimeArrangements(...args)).toStrictEqual(res);
        });
    }
});
