const { halvesAreAlike } = require("../src/301-determine-string-halves.js");

describe("Determine If String Halves Are Alike", () => {
    const tests = [
        { args: ["book"], res: true },
        { args: ["textbook"], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(halvesAreAlike(...args)).toStrictEqual(res);
        });
    }
});
