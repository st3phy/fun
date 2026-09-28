const { maxScore } = require("../src/247-maximum-score-after.js");

describe("Maximum Score After Splitting A String", () => {
    const tests = [
        { args: ["011101"], res: 5 },
        { args: ["00111"], res: 5 },
        { args: ["1111"], res: 3 },
        { args: ["00"], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxScore(...args)).toStrictEqual(res);
        });
    }
});
