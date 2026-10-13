const { arraySign } = require("../src/325-sign-product-an.js");

describe("Sign Of The Product Of An Array", () => {
    const tests = [
        { args: [[-1, -2, -3, -4, 3, 2, 1]], res: 1 },
        { args: [[1, 5, 0, 2, -3]], res: 0 },
        { args: [[-1, 1, -1, 1, -1]], res: -1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(arraySign(...args)).toStrictEqual(res);
        });
    }
});
