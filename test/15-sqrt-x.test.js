const { mySqrt } = require("../src/15-sqrt-x.js");

describe("Sqrt X", () => {
    const tests = [
        { args: [4], res: 2 },
        { args: [8], res: 2 },
        { args: [1], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mySqrt(...args)).toStrictEqual(res);
        });
    }
});
