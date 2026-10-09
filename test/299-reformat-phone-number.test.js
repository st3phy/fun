const { reformatNumber } = require("../src/299-reformat-phone-number.js");

describe("Reformat Phone Number", () => {
    const tests = [
        { args: ["1-23-45 6"], res: "123-456" },
        { args: ["123 4-567"], res: "123-45-67" },
        { args: ["123 4-5678"], res: "123-456-78" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reformatNumber(...args)).toStrictEqual(res);
        });
    }
});
