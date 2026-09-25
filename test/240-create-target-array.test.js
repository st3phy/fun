const { createTargetArray } = require("../src/240-create-target-array.js");

describe("Create Target Array In The Given Order", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(createTargetArray(...args)).toStrictEqual(res);
        });
    }
});
