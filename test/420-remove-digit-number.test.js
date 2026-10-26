const { removeDigit } = require("../src/420-remove-digit-number.js");

describe("Remove Digit From Number To Maximize Result", () => {
    const tests = [
        { args: ["123", "3"], res: "12" },
        { args: ["1231", "1"], res: "231" },
        { args: ["551", "5"], res: "51" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeDigit(...args)).toStrictEqual(res);
        });
    }
});
