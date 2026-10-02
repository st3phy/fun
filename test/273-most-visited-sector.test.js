const { mostVisited } = require("../src/273-most-visited-sector.js");

describe("Most Visited Sector In A Circular Track", () => {
    const tests = [
        { args: [4, [1, 3, 1, 2]], res: [1, 2] },
        { args: [2, [2, 1, 2, 1, 2, 1, 2, 1, 2]], res: [2] },
        { args: [2, [2, 1, 2, 1, 2, 1, 2, 1, 2]], res: [2] },
        { args: [7, [1, 3, 5, 7]], res: [1, 2, 3, 4, 5, 6, 7] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mostVisited(...args)).toStrictEqual(res);
        });
    }
});
