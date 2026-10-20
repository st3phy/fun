const { smallestEqual } = require("../src/376-smallest-index-equal.js");

describe("Smallest Index With Equal Value", () => {
    const tests = [
        { args: [[0, 1, 2]], res: 0 },
        { args: [[4, 3, 2, 1]], res: 2 },
        { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(smallestEqual(...args)).toStrictEqual(res);
        });
    }
});
