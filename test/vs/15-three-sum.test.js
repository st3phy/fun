const { threeSum } = require("../src/15-three-sum.js");

describe("Three Sum", () => {
    const tests = [
        {
            args: [-1, 0, 1, 2, -1, -4],
            res: [
                [-1, -1, 2],
                [-1, 0, 1]
            ]
        },
        { args: [0, 1, 1], res: [] },
        { args: [0, 0, 0], res: [[0, 0, 0]] },
        { args: [0, 0, 0, 0], res: [[0, 0, 0]] }
    ];

    const mapper = v => `${v.sort((a, b) => a - b)}`;
    for (const { args, res } of tests) {
        test(`${args}: ${JSON.stringify(res)}`, () => {
            expect(threeSum(args).map(mapper).sort()).toEqual(res.map(mapper).sort());
        });
    }
});
