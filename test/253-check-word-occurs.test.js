const { isPrefixOfWord } = require("../src/253-check-word-occurs.js");

describe("Check If A Word Occurs As A Prefix Of Any Word In A Sentence", () => {
    const tests = [
        { args: ["i love eating burger", "burg"], res: 4 },
        { args: ["this problem is an easy problem", "pro"], res: 2 },
        { args: ["i am tired", "you"], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPrefixOfWord(...args)).toStrictEqual(res);
        });
    }
});
