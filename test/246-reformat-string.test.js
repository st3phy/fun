const { reformat } = require("../src/246-reformat-string.js");

describe("Reformat The String", () => {
    const tests = [{ args: ["a0b1c2"], res: "0a1b2c" }];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reformat(...args)).toStrictEqual(res);
        });
    }
});
