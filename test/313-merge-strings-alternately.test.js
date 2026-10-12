const { mergeAlternately } = require("../src/313-merge-strings-alternately.js");

describe("Merge Strings Alternately", () => {
    const tests = [
        { args: ["abc", "pqr"], res: "apbqcr" },
        { args: ["ab", "pqrs"], res: "apbqrs" },
        { args: ["abcd", "pq"], res: "apbqcd" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mergeAlternately(...args)).toStrictEqual(res);
        });
    }
});
