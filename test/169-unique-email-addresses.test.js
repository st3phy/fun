const { numUniqueEmails } = require("../src/169-unique-email-addresses.js");

describe("Unique Email Addresses", () => {
    const tests = [
        {
            args: [
                ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
            ],
            res: 2
        },
        { args: [["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numUniqueEmails(...args)).toStrictEqual(res);
        });
    }
});
