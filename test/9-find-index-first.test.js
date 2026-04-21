const { strStr } = require("../src/9-find-index-first.js");

describe("Find The Index Of The First Occurrence In A String", () => {
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
