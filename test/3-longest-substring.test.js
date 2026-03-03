const { lengthOfLongestSubstring } = require("../src/3-longest-substring.js");

describe("Longest Substring Without Repeating Characters", () => {
    const tests = [
        { str: "abcabcbb", res: 3 },
        { str: "bbbbb", res: 1 },
        { str: "pwwkew", res: 3 },
        { str: "dvdf", res: 3 },
        { str: "au", res: 2 },
        { str: " ", res: 1 },
        { str: "", res: 0 }
    ];

    for (const { str, res } of tests) {
        test(`"${str}": ${res}`, () => {
            expect(lengthOfLongestSubstring(str)).toStrictEqual(res);
        });
    }
});
