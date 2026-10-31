const { applyOperations } = require("../src/462-apply-operations-an.js");

describe("Apply Operations To An Array", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(applyOperations(...args)).toStrictEqual(res);
        });
    }
});
