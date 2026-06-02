const { guessNumber } = require("../src/71-guess-number-higher.js");

describe("Guess Number Higher Or Lower", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(guessNumber(...args)).toStrictEqual(res);
        });
    }
});
