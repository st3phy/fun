const { cancellable } = require("../src/530-interval-cancellation.js");

describe("Interval Cancellation", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(cancellable(...args)).toStrictEqual(res);
        });
    }
});
