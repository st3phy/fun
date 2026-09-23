const { daysBetweenDates } = require("../src/234-number-days-between.js");

describe("Number Of Days Between Two Dates", () => {
    const tests = [
        { args: ["2019-06-29", "2019-06-30"], res: 1 },
        { args: ["2020-01-15", "2019-12-31"], res: 15 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(daysBetweenDates(...args)).toStrictEqual(res);
        });
    }
});
