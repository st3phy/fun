const { isCircularSentence } = require("../src/463-circular-sentence.js");

describe("Circular Sentence", () => {
    const tests = [
        { args: ["leetcode exercises sound delightful"], res: true },
        { args: ["eetcode"], res: true },
        { args: ["Leetcode is cool"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isCircularSentence(...args)).toStrictEqual(res);
        });
    }
});
