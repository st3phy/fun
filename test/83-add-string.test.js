const { addStrings } = require("../src/83-add-string.js");

describe("Add String", () => {
    const tests = [
        { args: ["11", "123"], res: "134" },
        { args: ["456", "77"], res: "533" },
        { args: ["0", "0"], res: "0" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(addStrings(...args)).toStrictEqual(res);
        });
    }
});
