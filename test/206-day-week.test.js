const { dayOfTheWeek } = require("../src/206-day-week.js");

describe("Day Of The Week", () => {
    const tests = [
        { args: [31, 8, 2019], res: "Saturday" },
        { args: [18, 7, 1999], res: "Sunday" },
        { args: [15, 8, 1993], res: "Sunday" },
        { args: [31, 8, 2000], res: "Thursday" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(dayOfTheWeek(...args)).toStrictEqual(res);
        });
    }
});
