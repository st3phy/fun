const { firstUniqChar } = require("../src/73-first-unique-character.js");

describe("First Unique Character In A String", () => {
    const tests = [
        { args: ["leetcode"], res: 0 },
        { args: ["loveleetcode"], res: 2 },
        { args: ["aabb"], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(firstUniqChar(...args)).toStrictEqual(res);
        });
    }
});
