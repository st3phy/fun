const { backspaceCompare } = require("../src/153-backspace-string-compare.js");

describe("Backspace String Compare", () => {
    const tests = [
        { args: ["ab#c", "ab#c"], res: true },
        { args: ["ab##", "c#d#"], res: true },
        { args: ["a#c", "b"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(backspaceCompare(...args)).toStrictEqual(res);
        });
    }
});
