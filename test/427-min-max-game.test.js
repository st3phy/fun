const { minMaxGame } = require("../src/427-min-max-game.js");

describe("Min Max Game", () => {
    const tests = [
        { args: [[1, 3, 5, 2, 4, 8, 2, 2]], res: 1 },
        { args: [[3]], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minMaxGame(...args)).toStrictEqual(res);
        });
    }
});
