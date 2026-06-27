const { toLowerCase } = require("../src/131-lower-case.js");

describe("To Lower Case", () => {
    const tests = [
        { args: ["Hello"], res: "hello" },
        { args: ["here"], res: "here" },
        { args: ["LOVELY"], res: "lovely" },
        { args: ["al&phaBET"], res: "al&phabet" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(toLowerCase(...args)).toStrictEqual(res);
        });
    }
});
