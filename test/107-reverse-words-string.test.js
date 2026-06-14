const { reverseWords } = require("../src/107-reverse-words-string.js");

describe("Reverse Words In A String III", () => {
    const tests = [
        { args: ["Let's take LeetCode contest"], res: "s'teL ekat edoCteeL tsetnoc" },
        { args: ["Mr Ding"], res: "rM gniD" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseWords(...args)).toStrictEqual(res);
        });
    }
});
