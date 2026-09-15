const { countCommas } = require("../src/209-count-commas-range.js");

describe("Count Commas In Range", () => {
    const tests = [
        { args: [1002], res: 3 },
        { args: [998], res: 0 },
        { args: [10002], res: 9003 },
        { args: [100000], res: 99001 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countCommas(...args)).toStrictEqual(res);
        });
    }
});
