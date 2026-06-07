const { thirdMax } = require("../src/82-third-maximum-number.js");

describe("Third Maximum Number", () => {
    const tests = [
        { args: [[3, 2, 1]], res: 1 },
        { args: [[1, 2]], res: 2 },
        { args: [[2, 2, 3, 1]], res: 1 },
        { args: [[5, 2, 2]], res: 5 },
        { args: [[5]], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(thirdMax(...args)).toStrictEqual(res);
        });
    }
});
