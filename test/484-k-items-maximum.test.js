const { kItemsWithMaximumSum } = require("../src/484-k-items-maximum.js");

describe("K Items With The Maximum Sum", () => {
    const tests = [
        { args: [3, 2, 0, 2], res: 2 },
        { args: [3, 2, 0, 4], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(kItemsWithMaximumSum(...args)).toStrictEqual(res);
        });
    }
});
