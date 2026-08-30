const { removeOutermostParentheses } = require("../src/186-remove-outermost-parentheses.js");

describe("Remove Outermost Parentheses", () => {
    const tests = [
        { args: ["(()())(())"], res: "()()()" },
        { args: ["(()())(())(()(()))"], res: "()()()()(())" },
        { args: ["()()"], res: "" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(removeOutermostParentheses(...args)).toStrictEqual(res);
        });
    }
});
