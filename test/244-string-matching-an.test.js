const { stringMatching } = require("../src/244-string-matching-an.js");

describe("String Matching In An Array", () => {
    const tests = [
        { args: [["mass", "as", "hero", "superhero"]], res: ["as", "hero"] },
        { args: [["leetcode", "et", "code"]], res: ["et", "code"] },
        { args: [["blue", "green", "bu"]], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(stringMatching(...args)).toStrictEqual(res);
        });
    }
});
