const { longestNiceSubstring } = require("../src/312-longest-nice-substring.js");

describe("Longest Nice Substring", () => {
    const tests = [
        { args: ["YazaAay"], res: "aAa" },
        { args: ["Bb"], res: "Bb" },
        { args: ["c"], res: "" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(longestNiceSubstring(...args)).toStrictEqual(res);
        });
    }
});
