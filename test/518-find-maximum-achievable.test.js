const { theMaximumAchievableX } = require("../src/518-find-maximum-achievable.js");

describe("Find The Maximum Achievable Number", () => {
    const tests = [
        { args: [4, 1], res: 6 },
        { args: [3, 2], res: 7 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(theMaximumAchievableX(...args)).toStrictEqual(res);
        });
    }
});
