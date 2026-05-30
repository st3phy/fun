const { moveZeroes } = require("../src/59-move-zeroes.js");

describe("Move Zeroes", () => {
    const tests = [
        { args: [[0, 1, 0, 3, 12]], res: [1, 3, 12, 0, 0] },
        { args: [[0]], res: [0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(moveZeroes(...args)).toStrictEqual(res);
        });
    }
});
