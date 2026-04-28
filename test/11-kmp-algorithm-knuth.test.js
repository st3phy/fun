const { strStr } = require("../src/11-kmp-algorithm-knuth.js");

describe("KMP Algorithm Knuth Morris Pratt", () => {
    const tests = [
        { args: ["sadbutsad", "sad"], res: 0 },
        { args: ["leetcode", "leeto"], res: -1 },
        { args: ["hello", "ll"], res: 2 },
        { args: ["mississippi", "issip"], res: 4 },
        { args: ["a", "a"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`haystack: ${args[0]}; needle: ${args[1]}; result: ${res}`, () => {
            expect(strStr(...args)).toStrictEqual(res);
        });
    }
});
