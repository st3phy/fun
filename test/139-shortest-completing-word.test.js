const { shortestCompletingWord } = require("../src/139-shortest-completing-word.js");

describe("Shortest Completing Word", () => {
    const tests = [
        { args: ["1s3 PSt", ["step", "steps", "stripe", "stepple"]], res: "steps" },
        { args: ["1s3 456", ["looks", "pest", "stew", "show"]], res: "pest" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(shortestCompletingWord(...args)).toStrictEqual(res);
        });
    }
});
