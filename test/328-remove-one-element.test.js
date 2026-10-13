const { canBeIncreasing } = require("../src/328-remove-one-element.js");

describe("Remove One Element To Make The Array Strictly Increasing", () => {
    const tests = [
        { args: [[1, 2, 10, 5, 7]], res: true },
        { args: [[2, 3, 1, 2]], res: false },
        { args: [[1, 1, 1]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canBeIncreasing(...args)).toStrictEqual(res);
        });
    }
});
