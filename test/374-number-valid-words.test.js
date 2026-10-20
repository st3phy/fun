const { countValidWords } = require("../src/374-number-valid-words.js");

describe("Number Of Valid Words In A Sentence", () => {
    const tests = [
        { args: ["cat and  dog"], res: 3 },
        { args: ["!this  1-s b8d!"], res: 0 },
        { args: ["alice and  bob are playing stone-game10"], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countValidWords(...args)).toStrictEqual(res);
        });
    }
});
