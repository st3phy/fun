const { isAlienSorted } = require("../src/174-verifying-an-alien.js");

describe("Verifying An Alien Dictionary", () => {
    const tests = [
        { args: [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"], res: true },
        { args: [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"], res: false },
        { args: [["apple", "app"], "abcdefghijklmnopqrstuvwxyz"], res: false },
        { args: [["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isAlienSorted(...args)).toStrictEqual(res);
        });
    }
});
