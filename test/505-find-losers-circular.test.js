const { circularGameLosers } = require("../src/505-find-losers-circular.js");

describe("Find The Losers Of The Circular Game", () => {
    const tests = [
        { args: [5, 2], res: [4, 5] },
        { args: [4, 4], res: [2, 3, 4] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(circularGameLosers(...args)).toStrictEqual(res);
        });
    }
});
