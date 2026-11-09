const { cancellable } = require("../src/507-timeout-cancellation.js");

describe("Timeout Cancellation", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(cancellable(...args)).toStrictEqual(res);
        });
    }
});
