const { minOperations } = require("../src/388-minimum-operations-sort.js");

describe("Minimum Operations To Sort A String", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minOperations(...args)).toStrictEqual(res);
        });
    }
});
