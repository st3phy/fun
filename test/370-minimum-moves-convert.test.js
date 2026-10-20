const { minimumMoves } = require("../src/370-minimum-moves-convert.js");

describe("Minimum Moves To Convert String", () => {
    const tests = [
        { args: ["XXX"], res: 1 },
        { args: ["XXOX"], res: 2 },
        { args: ["OOOO"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumMoves(...args)).toStrictEqual(res);
        });
    }
});
