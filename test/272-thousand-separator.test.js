const { thousandSeparator } = require("../src/272-thousand-separator.js");

describe("Thousand Separator", () => {
    const tests = [
        { args: [987], res: "987" },
        { args: [1234], res: "1.234" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(thousandSeparator(...args)).toStrictEqual(res);
        });
    }
});
