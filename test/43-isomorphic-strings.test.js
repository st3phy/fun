const { isIsomorphic } = require("../src/43-isomorphic-strings.js");

describe("Isomorphic Strings", () => {
    const tests = [
        { args: ["egg", "add"], res: true },
        { args: ["f11", "b23"], res: false },
        { args: ["paper", "title"], res: true },
        { args: ["badc", "baba"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isIsomorphic(...args)).toStrictEqual(res);
        });
    }
});
