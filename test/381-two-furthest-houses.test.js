const { maxDistance } = require("../src/381-two-furthest-houses.js");

describe("Two Furthest Houses With Different Colors", () => {
    const tests = [
        { args: [[1, 1, 1, 6, 1, 1, 1]], res: 3 },
        { args: [[1, 8, 3, 8, 3]], res: 4 },
        { args: [[0, 1]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxDistance(...args)).toStrictEqual(res);
        });
    }
});
