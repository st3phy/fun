const { maximumValue } = require("../src/458-maximum-value-string.js");

describe("Maximum Value Of A String In An Array", () => {
    const tests = [
        { args: [["alic3", "bob", "3", "4", "00000"]], res: 5 },
        { args: [["1", "01", "001", "0001"]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumValue(...args)).toStrictEqual(res);
        });
    }
});
