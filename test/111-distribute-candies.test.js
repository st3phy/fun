const { distributeCandies } = require("../src/111-distribute-candies.js");

describe("Distribute Candies", () => {
    const tests = [
        { args: [[1, 1, 2, 2, 3, 3]], res: 3 },
        { args: [[1, 1, 2, 3]], res: 2 },
        { args: [[6, 6, 6, 6]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distributeCandies(...args)).toStrictEqual(res);
        });
    }
});
