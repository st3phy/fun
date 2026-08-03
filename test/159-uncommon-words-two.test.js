const { uncommonFromSentences } = require("../src/159-uncommon-words-two.js");

describe("Uncommon Words From Two Sentences", () => {
    const tests = [
        { args: ["this apple is sweet", "this apple is sour"], res: ["sweet", "sour"] },
        { args: ["apple apple", "banana"], res: ["banana"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(uncommonFromSentences(...args)).toStrictEqual(res);
        });
    }
});
