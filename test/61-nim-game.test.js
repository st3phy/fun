const { canWinNim } = require("../src/61-nim-game.js");

describe("Nim Game", () => {
    const tests = [
        { args: [1], res: true },
        { args: [2], res: true },
        { args: [4], res: false },
        { args: [5], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canWinNim(...args)).toStrictEqual(res);
        });
    }
});
