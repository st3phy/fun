const { isPerfectSquare } = require("../src/70-valid-perfect-square.js");

describe("Valid Perfect Square", () => {
    const tests = [
        { args: [1], res: true },
        { args: [4], res: true },
        { args: [16], res: true },
        { args: [14], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPerfectSquare(...args)).toStrictEqual(res);
        });
    }
});
