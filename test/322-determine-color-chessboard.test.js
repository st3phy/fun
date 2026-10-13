const { squareIsWhite } = require("../src/322-determine-color-chessboard.js");

describe("Determine Color Of A Chessboard Square", () => {
    const tests = [
        { args: ["a1"], res: false },
        { args: ["h3"], res: true },
        { args: ["c3"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(squareIsWhite(...args)).toStrictEqual(res);
        });
    }
});
