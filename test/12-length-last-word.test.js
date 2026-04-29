const { lengthOfLastWord } = require("../src/12-length-last-word.js");

describe("Length Of Last Word", () => {
    const tests = [
        { args: ["Hello World"], res: 5 },
        { args: ["   fly me   to   the moon  "], res: 4 },
        { args: ["luffy is still joyboy  "], res: 6 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(lengthOfLastWord(...args)).toStrictEqual(res);
        });
    }
});
