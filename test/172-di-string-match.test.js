const { diStringMatch } = require("../src/172-di-string-match.js");

describe("DI String Match", () => {
    const tests = [
        { args: ["IDID"], res: [0, 4, 1, 3, 2] },
        { args: ["III"], res: [0, 1, 2, 3] },
        { args: ["DDI"], res: [3, 2, 0, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(diStringMatch(...args)).toStrictEqual(res);
        });
    }
});
