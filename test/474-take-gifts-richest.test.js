const { pickGifts } = require("../src/474-take-gifts-richest.js");

describe("Take Gifts From The Richest Pile", () => {
    const tests = [
        { args: [[25, 64, 9, 4, 100], 4], res: 29 },
        { args: [[1, 1, 1, 1], 4], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(pickGifts(...args)).toStrictEqual(res);
        });
    }
});
