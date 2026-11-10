const { minimizedStringLength } = require("../src/512-minimize-string-length.js");

describe("Minimize String Length", () => {
    const tests = [
        { args: ["aaabc"], res: 3 },
        { args: ["cbbd"], res: 3 },
        { args: ["baadccab"], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimizedStringLength(...args)).toStrictEqual(res);
        });
    }
});
