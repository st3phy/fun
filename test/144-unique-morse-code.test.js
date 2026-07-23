const { uniqueMorseRepresentations } = require("../src/144-unique-morse-code.js");

describe("Unique Morse Code Words", () => {
    const tests = [{ args: [["gin", "zen", "gig", "msg"]], res: 2 }];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(uniqueMorseRepresentations(...args)).toStrictEqual(res);
        });
    }
});
