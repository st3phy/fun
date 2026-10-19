const { reversePrefix } = require("../src/364-reverse-prefix-word.js");

describe("Reverse Prefix Of Word", () => {
    const tests = [
        { args: ["abcdefd", "d"], res: "dcbaefd" },
        { args: ["xyxzxe", "z"], res: "zxyxxe" },
        { args: ["abcd", "z"], res: "abcd" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reversePrefix(...args)).toStrictEqual(res);
        });
    }
});
