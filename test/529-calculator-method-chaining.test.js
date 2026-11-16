const { Calculator } = require("../src/529-calculator-method-chaining.js");

describe("Calculator With Method Chaining", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(Calculator(...args)).toStrictEqual(res);
        });
    }
});
