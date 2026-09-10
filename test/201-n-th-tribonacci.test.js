const { tribonacci } = require("../src/201-n-th-tribonacci.js");

describe("N Th Tribonacci Number", () => {
    const tests = [
        { args: [4], res: 4 },
        { args: [25], res: 1389537 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(tribonacci(...args)).toStrictEqual(res);
        });
    }
});
