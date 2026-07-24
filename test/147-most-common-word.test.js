const { mostCommonWord } = require("../src/147-most-common-word.js");

describe("Most Common Word", () => {
    const tests = [
        { args: ["Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]], res: "ball" },
        { args: ["a.", []], res: "a" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mostCommonWord(...args)).toStrictEqual(res);
        });
    }
});
