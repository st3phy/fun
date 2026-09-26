const { countLargestGroup } = require("../src/242-count-largest-group.js");

describe("Count Largest Group", () => {
    const tests = [
        { args: [13], res: 4 },
        { args: [2], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countLargestGroup(...args)).toStrictEqual(res);
        });
    }
});
