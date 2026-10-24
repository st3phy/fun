const { countDaysTogether } = require("../src/401-count-days-spent.js");

describe("Count Days Spent Together", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countDaysTogether(...args)).toStrictEqual(res);
        });
    }
});
