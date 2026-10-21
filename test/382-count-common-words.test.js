const { countWords } = require("../src/382-count-common-words.js");

describe("Count Common Words With One Occurrence", () => {
    const tests = [
        {
            args: [
                ["leetcode", "is", "amazing", "as", "is"],
                ["amazing", "leetcode", "is"]
            ],
            res: 2
        },
        {
            args: [
                ["b", "bb", "bbb"],
                ["a", "aa", "aaa"]
            ],
            res: 0
        },
        {
            args: [
                ["a", "ab"],
                ["a", "a", "a", "ab"]
            ],
            res: 1
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countWords(...args)).toStrictEqual(res);
        });
    }
});
