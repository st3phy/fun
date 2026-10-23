const { countElements } = require("../src/396-count-elements-strictly.js");

describe("Count Elements With Strictly Smaller And Greater Elements", () => {
    const tests = [
        { args: [[11, 7, 2, 15]], res: 2 },
        { args: [[-3, 3, 3, 90]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countElements(...args)).toStrictEqual(res);
        });
    }
});
