const { slowestKey } = require("../src/286-slowest-key.js");

describe("Slowest Key", () => {
    const tests = [
        { args: [[9, 29, 49, 50], "cbcd"], res: "c" },
        { args: [[12, 23, 36, 46, 62], "spuda"], res: "a" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(slowestKey(...args)).toStrictEqual(res);
        });
    }
});
