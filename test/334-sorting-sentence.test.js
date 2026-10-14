const { sortSentence } = require("../src/334-sorting-sentence.js");

describe("Sorting The Sentence", () => {
    const tests = [
        { args: ["is2 sentence4 This1 a3"], res: "This is a sentence" },
        { args: ["Myself2 Me1 I4 and3"], res: "Me Myself and I" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortSentence(...args)).toStrictEqual(res);
        });
    }
});
