const { findGCD } = require("../src/359-find-greatest-common.js");

describe("Find Greatest Common Divisor Of Array", () => {
    const tests = [
        { args: [[2, 5, 6, 9, 10]], res: 2 },
        { args: [[7, 5, 6, 8, 3]], res: 1 },
        { args: [[3, 3]], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findGCD(...args)).toStrictEqual(res);
        });
    }
});
