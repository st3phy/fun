const { greatestLetter } = require("../src/429-greatest-english-letter.js");

describe("Greatest English Letter In Upper And Lower Case", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(greatestLetter(...args)).toStrictEqual(res);
        });
    }
});
