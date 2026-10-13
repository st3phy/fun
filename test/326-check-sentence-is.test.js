const { checkIfPangram } = require("../src/326-check-sentence-is.js");

describe("Check If The Sentence Is Pangram", () => {
    const tests = [
        { args: ["thequickbrownfoxjumpsoverthelazydog"], res: true },
        { args: ["leetcode"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkIfPangram(...args)).toStrictEqual(res);
        });
    }
});
