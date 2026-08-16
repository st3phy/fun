const { commonChars } = require("../src/181-find-common-characters.js");

describe("Find Common Characters", () => {
    const tests = [
        { args: [["bella", "label", "roller"]], res: ["e", "l", "l"] },
        { args: [["cool", "lock", "cook"]], res: ["c", "o"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(commonChars(...args)).toStrictEqual(res);
        });
    }
});
