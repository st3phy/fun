const { bestHand } = require("../src/437-best-poker-hand.js");

describe("Best Poker Hand", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(bestHand(...args)).toStrictEqual(res);
        });
    }
});
