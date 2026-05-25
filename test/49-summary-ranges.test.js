const { summaryRanges } = require("../src/49-summary-ranges.js");

describe("Summary Ranges", () => {
    const tests = [
        { args: [[0, 1, 2, 4, 5, 7]], res: ["0->2", "4->5", "7"] },
        { args: [[0, 2, 3, 4, 6, 8, 9]], res: ["0", "2->4", "6", "8->9"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(summaryRanges(...args)).toStrictEqual(res);
        });
    }
});
