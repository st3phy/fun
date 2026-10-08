const { getMaximumGenerated } = require("../src/290-get-maximum-generated.js");

describe("Get Maximum In Generated Array", () => {
    const tests = [
        { args: [7], res: 3 },
        { args: [2], res: 1 },
        { args: [3], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getMaximumGenerated(...args)).toStrictEqual(res);
        });
    }
});
