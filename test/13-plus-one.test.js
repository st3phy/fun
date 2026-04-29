const { plusOne } = require("../src/13-plus-one.js");

describe("Plus One", () => {
    const tests = [
        { args: [[1, 2, 3]], res: [1, 2, 4] },
        { args: [[4, 3, 2, 1]], res: [4, 3, 2, 2] },
        { args: [[9]], res: [1, 0] },
        { args: [[9, 9, 9]], res: [1, 0, 0, 0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(plusOne(...args)).toStrictEqual(res);
        });
    }
});
