const { mostWordsFound } = require("../src/387-maximum-number-words.js");

describe("Maximum Number Of Words Found In Sentences", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(mostWordsFound(...args)).toStrictEqual(res);
        });
    }
});
