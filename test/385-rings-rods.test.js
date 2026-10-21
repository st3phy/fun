const { countPoints } = require("../src/385-rings-rods.js");

describe("Rings And Rods", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countPoints(...args)).toStrictEqual(res);
        });
    }
});
