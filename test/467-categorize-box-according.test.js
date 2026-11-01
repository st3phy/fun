const { categorizeBox } = require("../src/467-categorize-box-according.js");

describe("Categorize Box According To Criteria", () => {
    const tests = [
        { args: [1000, 35, 700, 300], res: "Heavy" },
        { args: [200, 50, 800, 50], res: "Neither" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(categorizeBox(...args)).toStrictEqual(res);
        });
    }
});
