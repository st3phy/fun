const { myAtoi } = require("../src/8-string-to-int-atoi.js");

describe("String to Integer (atoi)", () => {
    const tests = [
        { arg: "42", res: 42 },
        { arg: "-042", res: -42 },
        { arg: "1337c0d3", res: 1337 },
        { arg: "0-1", res: 0 },
        { arg: "words and 987", res: 0 }
    ];

    for (const { arg, res } of tests) {
        test(`${arg}: ${res}`, () => {
            expect(myAtoi(arg)).toStrictEqual(res);
        });
    }
});
