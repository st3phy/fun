const { average } = require("../src/260-average-salary-excluding.js");

describe("Average Salary Excluding The Minimum And Maximum Salary", () => {
    const tests = [
        { args: [[4000, 3000, 1000, 2000]], res: 2500.0 },
        { args: [[1000, 2000, 3000]], res: 2000.0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(average(...args)).toStrictEqual(res);
        });
    }
});
