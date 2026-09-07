const { findOccurrences } = require("../src/194-occurrences-after-bigram.js");

describe("Occurrences After Bigram", () => {
    const tests = [
        { args: ["alice is a good girl she is a good student", "a", "good"], res: ["girl", "student"] },
        { args: ["we will we will rock you", "we", "will"], res: ["we", "rock"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findOccurrences(...args)).toStrictEqual(res);
        });
    }
});
