const { areNumbersAscending } = require("../src/373-check-numbers-are.js");

describe("Check If Numbers Are Ascending In A Sentence", () => {
    const tests = [
        { args: ["1 box has 3 blue 4 red 6 green and 12 yellow marbles"], res: true },
        { args: ["hello world 5 x 5"], res: false },
        { args: ["sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(areNumbersAscending(...args)).toStrictEqual(res);
        });
    }
});
