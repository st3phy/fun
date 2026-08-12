const { RecentCounter } = require("../src/170-number-recent-calls.js");

describe("Number Of Recent Calls", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(RecentCounter(...args)).toStrictEqual(res);
        });
    }
});
