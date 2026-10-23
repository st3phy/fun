const { countOperations } = require("../src/400-count-operations-obtain.js");

describe("Count Operations To Obtain Zero", () => {
    const tests = [
        { args: [2, 3], res: 3 },
        { args: [10, 10], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countOperations(...args)).toStrictEqual(res);
        });
    }
});
