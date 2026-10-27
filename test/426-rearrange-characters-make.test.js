const { rearrangeCharacters } = require("../src/426-rearrange-characters-make.js");

describe("Rearrange Characters To Make Target String", () => {
    const tests = [
        { args: ["ilovecodingonleetcode", "code"], res: 2 },
        { args: ["abcba", "abc"], res: 1 },
        { args: ["abbaccaddaeea", "aaaaa"], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(rearrangeCharacters(...args)).toStrictEqual(res);
        });
    }
});
