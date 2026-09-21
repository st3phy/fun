const { replaceElements } = require("../src/221-replace-elements-greatest.js");

describe("Replace Elements With Greatest Element On Right Side", () => {
    const tests = [
        { args: [[17, 18, 5, 4, 6, 1]], res: [18, 6, 6, 6, 1, -1] },
        { args: [[400]], res: [-1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(replaceElements(...args)).toStrictEqual(res);
        });
    }
});
