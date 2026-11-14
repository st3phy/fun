const { splitWordsBySeparator } = require("../src/522-split-strings-separator.js");

describe("Split Strings By Separator", () => {
    const tests = [
        { args: [["one.two.three", "four.five", "six"], "."], res: ["one", "two", "three", "four", "five", "six"] },
        { args: [["$easy$", "$problem$"], "$"], res: ["easy", "problem"] },
        { args: [["|||"], "|"], res: [] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(splitWordsBySeparator(...args)).toStrictEqual(res);
        });
    }
});
