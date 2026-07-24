const { shortestToChar } = require("../src/148-shortest-distance-character.js");

describe("Shortest Distance To A Character", () => {
    const tests = [
        { args: ["loveleetcode", "e"], res: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0] },
        { args: ["aaab", "b"], res: [3, 2, 1, 0] },
        { args: ["loveleetcodeab", "e"], res: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0, 1, 2] },
        { args: ["baaa", "b"], res: [0, 1, 2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(shortestToChar(...args)).toStrictEqual(res);
        });
    }
});
