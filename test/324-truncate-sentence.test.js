const { truncateSentence } = require("../src/324-truncate-sentence.js");

describe("Truncate Sentence", () => {
    const tests = [
        { args: ["Hello how are you Contestant", 4], res: "Hello how are you" },
        { args: ["What is the solution to this problem", 4], res: "What is the solution" },
        { args: ["chopper is not a tanuki", 5], res: "chopper is not a tanuki" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(truncateSentence(...args)).toStrictEqual(res);
        });
    }
});
