const { subtractProductAndSum } = require("../src/218-subtract-product-sum.js");

describe("Subtract The Product And Sum Of Digits Of An Integer", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(subtractProductAndSum(...args)).toStrictEqual(res);
        });
    }
});
