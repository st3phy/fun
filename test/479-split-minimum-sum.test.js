const { splitNum } = require("../src/479-split-minimum-sum.js");

describe("Split With Minimum Sum", () => {
    const tests = [
        { args: [4325], res: 59 },
        { args: [687], res: 75 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(splitNum(...args)).toStrictEqual(res);
        });
    }
});
