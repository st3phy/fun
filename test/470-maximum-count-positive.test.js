const { maximumCount } = require("../src/470-maximum-count-positive.js");

describe("Maximum Count Of Positive Integer And Negative Integer", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumCount(...args)).toStrictEqual(res);
        });
    }
});
