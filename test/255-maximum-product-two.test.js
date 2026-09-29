const { maxProduct } = require("../src/255-maximum-product-two.js");

describe("Maximum Product Of Two Elements In An Array", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxProduct(...args)).toStrictEqual(res);
        });
    }
});
