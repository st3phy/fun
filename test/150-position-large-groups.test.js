const { largeGroupPositions } = require("../src/150-position-large-groups.js");

describe("Position Of Large Groups", () => {
    const tests = [
        { args: ["abbxxxxzzy"], res: [[3, 6]] },
        { args: ["aaa"], res: [[0, 2]] },
        { args: ["abc"], res: [] },
        {
            args: ["abcdddeeeeaabbbcd"],
            res: [
                [3, 5],
                [6, 9],
                [12, 14]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largeGroupPositions(...args)).toStrictEqual(res);
        });
    }
});
