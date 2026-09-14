const { maxNumberOfBalloons } = require("../src/207-maximum-number-balloons.js");

describe("Maximum Number Of Balloons", () => {
    const tests = [
        { args: ["nlaebolko"], res: 1 },
        { args: ["loonbalxballpoon"], res: 2 },
        { args: ["leetcode"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxNumberOfBalloons(...args)).toStrictEqual(res);
        });
    }
});
