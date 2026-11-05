const { countSeniors } = require("../src/497-number-senior-citizens.js");

describe("Number Of Senior Citizens", () => {
    const tests = [
        { args: [["7868190130M7522", "5303914400F9211", "9273338290F4010"]], res: 2 },
        { args: [["1313579440F2036", "2921522980M5644"]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countSeniors(...args)).toStrictEqual(res);
        });
    }
});
