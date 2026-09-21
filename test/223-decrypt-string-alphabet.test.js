const { freqAlphabets } = require("../src/223-decrypt-string-alphabet.js");

describe("Decrypt String From Alphabet To Integer Mapping", () => {
    const tests = [
        { args: ["10#11#12"], res: "jkab" },
        { args: ["1326#"], res: "acz" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(freqAlphabets(...args)).toStrictEqual(res);
        });
    }
});
