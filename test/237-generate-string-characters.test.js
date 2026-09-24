const { generateTheString } = require("../src/237-generate-string-characters.js");

describe("Generate A String With Characters That Have Odd Counts", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(generateTheString(...args)).toStrictEqual(res);
        });
    }
});
