const { countBalls } = require("../src/308-maximum-number-balls.js");

describe("Maximum Number Of Balls In A Box", () => {
    const tests = [
        { args: [1, 10], res: 2 },
        { args: [5, 15], res: 2 },
        { args: [19, 28], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countBalls(...args)).toStrictEqual(res);
        });
    }
});
