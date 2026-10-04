const { reorderSpaces } = require("../src/279-rearrange-spaces-between.js");

describe("Rearrange Spaces Between Words", () => {
    const tests = [
        { args: ["  this   is  a sentence "], res: "this   is   a   sentence" },
        { args: [" practice   makes   perfect"], res: "practice   makes   perfect " },
        { args: ["a b c "], res: "a b c " },
        { args: ["a b   c d"], res: "a b c d  " },
        { args: [" hello"], res: "hello " }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reorderSpaces(...args)).toStrictEqual(res);
        });
    }
});
