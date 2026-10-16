const { areOccurrencesEqual } = require("../src/348-check-all-characters.js");

describe("Check If All Characters Have Equal Number Of Occurrences", () => {
    const tests = [
        { args: ["abacbc"], res: true },
        { args: ["aaabb"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(areOccurrencesEqual(...args)).toStrictEqual(res);
        });
    }
});
