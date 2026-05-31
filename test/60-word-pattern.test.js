const { wordPattern } = require("../src/60-word-pattern.js");

describe("Word Pattern", () => {
    const tests = [
        { args: ["abba", "dog cat cat dog"], res: true },
        { args: ["abba", "dog cat cat fish"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(wordPattern(...args)).toStrictEqual(res);
        });
    }
});
