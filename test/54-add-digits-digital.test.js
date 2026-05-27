const { addDigits } = require("../src/54-add-digits-digital.js");

describe("Add Digits Digital Root", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(addDigits(...args)).toStrictEqual(res);
        });
    }
});
