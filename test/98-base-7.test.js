const { convertToBase7 } = require("../src/98-base-7.js");

describe("Base 7", () => {
    const tests = [
        { args: [100], res: "202" },
        { args: [-7], res: "-10" },
        { args: [0], res: "0" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(convertToBase7(...args)).toStrictEqual(res);
        });
    }
});
