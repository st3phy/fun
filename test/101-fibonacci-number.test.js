const { fib } = require("../src/101-fibonacci-number.js");

describe("Fibonacci Number", () => {
    const tests = [
        { args: [2], res: 1 },
        { args: [3], res: 2 },
        { args: [4], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(fib(...args)).toStrictEqual(res);
        });
    }
});
