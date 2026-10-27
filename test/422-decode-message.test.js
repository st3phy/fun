const { decodeMessage } = require("../src/422-decode-message.js");

describe("Decode The Message", () => {
    const tests = [
        { args: ["the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"], res: "this is a secret" },
        {
            args: ["eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"],
            res: "the five boxing wizards jump quickly"
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(decodeMessage(...args)).toStrictEqual(res);
        });
    }
});
