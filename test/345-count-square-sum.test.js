const { countTriples } = require("../src/345-count-square-sum.js");

describe("Count Square Sum Triples", () => {
    const tests = [
        { args: [5], res: 2 },
        { args: [10], res: 4 },
        { args: [250], res: 330 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countTriples(...args)).toStrictEqual(res);
        });
    }
});
