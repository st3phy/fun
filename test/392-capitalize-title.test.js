const { capitalizeTitle } = require("../src/392-capitalize-title.js");

describe("Capitalize The Title", () => {
    const tests = [
        { args: ["capiTalIze tHe titLe"], res: "Capitalize The Title" },
        { args: ["First leTTeR of EACH Word"], res: "First Letter of Each Word" },
        { args: ["i lOve leetcode"], res: "i Love Leetcode" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(capitalizeTitle(...args)).toStrictEqual(res);
        });
    }
});
