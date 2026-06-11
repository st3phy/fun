const { findWords } = require("../src/97-keyboard-row.js");

describe("Keyboard Row", () => {
    const tests = [
        { args: [["Hello", "Alaska", "Dad", "Peace"]], res: ["Alaska", "Dad"] },
        { args: [["omk"]], res: [] },
        { args: [["adsdf", "sfd"]], res: ["adsdf", "sfd"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findWords(...args)).toStrictEqual(res);
        });
    }
});
