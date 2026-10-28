const { numberOfPairs } = require("../src/435-maximum-number-pairs.js");

describe("Maximum Number Of Pairs In Array", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numberOfPairs(...args)).toStrictEqual(res);
        });
    }
});
