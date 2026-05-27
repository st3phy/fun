const { addDigits } = require("../src/53-add-digits.js");

describe("Add Digits", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(addDigits(...args)).toStrictEqual(res);
        });
    }
});
