const { isLongPressedName } = require("../src/168-long-pressed-name.js");

describe("Long Pressed Name", () => {
    const tests = [
        { args: ["alex", "aaleex"], res: true },
        { args: ["saeed", "ssaaedd"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isLongPressedName(...args)).toStrictEqual(res);
        });
    }
});
