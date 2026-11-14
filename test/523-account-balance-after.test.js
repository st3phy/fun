const { accountBalanceAfterPurchase } = require("../src/523-account-balance-after.js");

describe("Account Balance After Rounded Purchase", () => {
    const tests = [
        { args: [9], res: 90 },
        { args: [15], res: 80 },
        { args: [10], res: 90 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(accountBalanceAfterPurchase(...args)).toStrictEqual(res);
        });
    }
});
