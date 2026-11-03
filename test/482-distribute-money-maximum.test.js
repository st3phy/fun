const { distMoney } = require("../src/482-distribute-money-maximum.js");

describe("Distribute Money To Maximum Children", () => {
    const tests = [
        { args: [20, 3], res: 1 },
        { args: [16, 2], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distMoney(...args)).toStrictEqual(res);
        });
    }
});
