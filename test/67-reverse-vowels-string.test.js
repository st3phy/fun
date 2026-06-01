const { reverseVowels } = require("../src/67-reverse-vowels-string.js");

describe("Reverse Vowels Of A String", () => {
    const tests = [
        { args: ["IceCreAm"], res: "AceCreIm" },
        { args: ["leetcode"], res: "leotcede" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseVowels(...args)).toStrictEqual(res);
        });
    }
});
