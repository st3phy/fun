const { makeEqual } = require("../src/341-redistribute-characters-make.js");

describe("Redistribute Characters To Make All Strings Equal", () => {
    const tests = [
        { args: [["abc", "aabc", "bc"]], res: true },
        { args: [["ab", "a"]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(makeEqual(...args)).toStrictEqual(res);
        });
    }
});
