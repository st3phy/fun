const { finalValueAfterOperations } = require("../src/366-final-value-variable.js");

describe("Final Value Of Variable After Performing Operations", () => {
    const tests = [
        { args: [["--X", "X++", "X++"]], res: 1 },
        { args: [["++X", "++X", "X++"]], res: 3 },
        { args: [["X++", "++X", "--X", "X--"]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(finalValueAfterOperations(...args)).toStrictEqual(res);
        });
    }
});
