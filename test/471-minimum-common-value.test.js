const { getCommon } = require("../src/471-minimum-common-value.js");

describe("Minimum Common Value", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(getCommon(...args)).toStrictEqual(res);
        });
    }
});
