const { calPoints } = require("../src/123-baseball-game.js");

describe("Baseball Game", () => {
    const tests = [
        { args: [["5", "2", "C", "D", "+"]], res: 30 },
        { args: [["5", "-2", "4", "C", "D", "9", "+", "+"]], res: 27 },
        { args: [["1", "C"]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(calPoints(...args)).toStrictEqual(res);
        });
    }
});
