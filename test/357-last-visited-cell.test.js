const { lastVisitedCell } = require("../src/357-last-visited-cell.js");

describe("Last Visited Cell In A Directional Grid Leetcode", () => {
    const tests = [
        {
            args: [
                [
                    ["R", "D"],
                    ["U", "L"]
                ]
            ],
            res: [1, 0]
        },
        { args: [[["R", "R", "R"]]], res: [0, 2] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(lastVisitedCell(...args)).toStrictEqual(res);
        });
    }
});
