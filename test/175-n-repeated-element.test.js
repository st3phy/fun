const { repeatedNTimes } = require("../src/175-n-repeated-element.js");

describe("N Repeated Element In Size 2N Array", () => {
    const tests = [
        { args: [[1, 2, 3, 3]], res: 3 },
        { args: [[2, 1, 2, 5, 3, 2]], res: 2 },
        { args: [[5, 1, 5, 2, 5, 3, 5, 4]], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(repeatedNTimes(...args)).toStrictEqual(res);
        });
    }
});
