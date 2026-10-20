const { countVowelSubstrings } = require("../src/377-count-vowel-substrings.js");

describe("Count Vowel Substrings Of A String", () => {
    const tests = [
        { args: ["aeiouu"], res: 2 },
        { args: ["unicornarihan"], res: 0 },
        { args: ["cuaieuouac"], res: 7 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countVowelSubstrings(...args)).toStrictEqual(res);
        });
    }
});
