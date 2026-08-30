const { divisorGame } = require("../src/187-divisor-game.js");

describe("Divisor Game", () => {
    const tests = [
        { args: [2], res: true },
        { args: [3], res: false },
        { args: [6], res: true },
        { args: [12], res: true },
        { args: [15], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(divisorGame(...args)).toStrictEqual(res);
        });
    }
});
