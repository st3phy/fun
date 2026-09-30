const { runningSum } = require("../src/258-running-sum-1d.js");

describe("Running Sum Of 1d Array", () => {
    const tests = [
        { args: [[1, 2, 3, 4]], res: [1, 3, 6, 10] },
        { args: [[1, 1, 1, 1, 1]], res: [1, 2, 3, 4, 5] },
        { args: [[3, 1, 2, 10, 1]], res: [3, 4, 6, 16, 17] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(runningSum(...args)).toStrictEqual(res);
        });
    }
});
