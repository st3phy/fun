const { foo } = require("../src/198-print-order.js");

describe("Print In Order", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(foo(...args)).toStrictEqual(res);
        });
    }
});
