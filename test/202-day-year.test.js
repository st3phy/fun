const { dayOfYear } = require("../src/202-day-year.js");

describe("Day Of The Year", () => {
    const tests = [
        { args: ["2019-01-09"], res: 9 },
        { args: ["2019-02-10"], res: 41 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(dayOfYear(...args)).toStrictEqual(res);
        });
    }
});
