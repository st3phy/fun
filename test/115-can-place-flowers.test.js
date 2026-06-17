const { canPlaceFlowers } = require("../src/115-can-place-flowers.js");

describe("Can Place Flowers", () => {
    const tests = [
        { args: [[1, 0, 0, 0, 1], 1], res: true },
        { args: [[1, 0, 0, 0, 1], 2], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canPlaceFlowers(...args)).toStrictEqual(res);
        });
    }
});
