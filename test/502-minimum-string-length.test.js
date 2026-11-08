const { minLength } = require("../src/502-minimum-string-length.js");

describe("Minimum String Length After Removing Substrings", () => {
    const tests = [
        { args: ["ABFCACDB"], res: 2 },
        { args: ["ACBBD"], res: 5 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minLength(...args)).toStrictEqual(res);
        });
    }
});
