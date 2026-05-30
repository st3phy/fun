const { missingNumber } = require("../src/58-missing-number.js");

describe("Missing Number", () => {
    const tests = [
        { args: [[3, 0, 1]], res: 2 },
        { args: [[0, 1]], res: 2 },
        { args: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], res: 8 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(missingNumber(...args)).toStrictEqual(res);
        });
    }
});
