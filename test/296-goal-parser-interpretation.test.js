const { interpret } = require("../src/296-goal-parser-interpretation.js");

describe("Goal Parser Interpretation", () => {
    const tests = [
        { args: ["G()(al)"], res: "Goal" },
        { args: ["G()()()()(al)"], res: "Gooooal" },
        { args: ["(al)G(al)()()G"], res: "alGalooG" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(interpret(...args)).toStrictEqual(res);
        });
    }
});
