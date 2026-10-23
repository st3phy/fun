const { divideString } = require("../src/394-divide-string-groups.js");

describe("Divide A String Into Groups Of Size K", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(divideString(...args)).toStrictEqual(res);
        });
    }
});
