const { isOneBitCharacter } = require("../src/132-one-bit-two.js");

describe("One Bit And Two Bit Characters", () => {
    const tests = [
        { args: [[1, 0, 0]], res: true },
        { args: [[1, 1, 1, 0]], res: false },
        { args: [[1, 1, 1, 0]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isOneBitCharacter(...args)).toStrictEqual(res);
        });
    }
});
