const { minimumRecolors } = require("../src/440-minimum-recolors-get.js");

describe("Minimum Recolors To Get K Consecutive Black Blocks", () => {
    const tests = [
        { args: ["WBBWWBBWBW", 7], res: 3 },
        { args: ["WBWBBBW", 2], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumRecolors(...args)).toStrictEqual(res);
        });
    }
});
