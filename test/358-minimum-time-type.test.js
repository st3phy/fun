const { minTimeToType } = require("../src/358-minimum-time-type.js");

describe("Minimum Time To Type Word Using Special Typewriter", () => {
    const tests = [
        { args: ["abc"], res: 5 },
        { args: ["bza"], res: 7 },
        { args: ["zjpc"], res: 34 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minTimeToType(...args)).toStrictEqual(res);
        });
    }
});
