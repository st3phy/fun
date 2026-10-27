const { removeAnagrams } = require("../src/423-find-resultant-array.js");

describe("Find Resultant Array After Removing Anagrams", () => {
    const tests = [
        { args: [["abba", "baba", "bbaa", "cd", "cd"]], res: ["abba", "cd"] },
        { args: [["a", "b", "c", "d", "e"]], res: ["a", "b", "c", "d", "e"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeAnagrams(...args)).toStrictEqual(res);
        });
    }
});
