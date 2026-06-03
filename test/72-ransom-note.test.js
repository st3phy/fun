const { canConstruct } = require("../src/72-ransom-note.js");

describe("Ransom Note", () => {
    const tests = [
        { args: ["a", "b"], res: false },
        { args: ["aa", "ab"], res: false },
        { args: ["aa", "aab"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canConstruct(...args)).toStrictEqual(res);
        });
    }
});
