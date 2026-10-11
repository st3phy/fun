const { maximumTime } = require("../src/307-latest-time-replacing.js");

describe("Latest Time By Replacing Hidden Digits", () => {
    const tests = [
        { args: ["2?:?0"], res: "23:50" },
        { args: ["0?:3?"], res: "09:39" },
        { args: ["1?:22"], res: "19:22" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumTime(...args)).toStrictEqual(res);
        });
    }
});
