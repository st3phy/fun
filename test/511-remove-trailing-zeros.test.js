const { removeTrailingZeroes } = require("../src/511-remove-trailing-zeros.js");

describe("Remove Trailing Zeros From A String", () => {
    const tests = [
        { args: ["51230100"], res: "512301" },
        { args: ["123"], res: "123" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeTrailingZeroes(...args)).toStrictEqual(res);
        });
    }
});
