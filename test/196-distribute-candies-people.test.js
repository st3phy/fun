const { distributeCandies } = require("../src/196-distribute-candies-people.js");

describe("Distribute Candies To People", () => {
    const tests = [
        { args: [7, 4], res: [1, 2, 3, 1] },
        { args: [10, 3], res: [5, 2, 3] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distributeCandies(...args)).toStrictEqual(res);
        });
    }
});
