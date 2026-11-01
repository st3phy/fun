const { closestTarget } = require("../src/469-shortest-distance-target.js");

describe("Shortest Distance To Target String In A Circular Array", () => {
    const tests = [
        { args: [["hello", "i", "am", "leetcode", "hello"], "hello", 1], res: 1 },
        { args: [["a", "b", "leetcode"], "leetcode", 0], res: 1 },
        { args: [["i", "eat", "leetcode"], "ate", 1], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(closestTarget(...args)).toStrictEqual(res);
        });
    }
});
