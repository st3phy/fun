const { equalFrequency } = require("../src/443-remove-letter-equalize.js");

describe("Remove Letter To Equalize Frequency", () => {
    const tests = [
        { args: ["abcc"], res: true },
        { args: ["aazz"], res: false },
        { args: ["bac"], res: true },
        { args: ["cbbd"], res: true },
        { args: ["ddaccb"], res: false },
        { args: ["abbcc"], res: true },
        { args: ["ceeeec"], res: false },
        { args: ["aaaabbbbccc"], res: false },
        { args: ["zz"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(equalFrequency(...args)).toStrictEqual(res);
        });
    }
});
