const { maxDepth } = require("../src/283-maximum-nesting-depth.js");

describe("Maximum Nesting Depth Of The Parentheses", () => {
    const tests = [
        { args: ["(1+(2*3)+((8)/4))+1"], res: 3 },
        { args: ["(1)+((2))+(((3)))"], res: 3 },
        { args: ["8*((1*(5+6))*(8/6))"], res: 3 },
        { args: ["()(())((()()))"], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxDepth(...args)).toStrictEqual(res);
        });
    }
});
