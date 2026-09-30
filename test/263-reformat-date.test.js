const { reformatDate } = require("../src/263-reformat-date.js");

describe("Reformat Date", () => {
    const tests = [
        { args: ["20th Oct 2052"], res: "2052-10-20" },
        { args: ["6th Jun 1933"], res: "1933-06-06" },
        { args: ["26th May 1960"], res: "1960-05-26" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reformatDate(...args)).toStrictEqual(res);
        });
    }
});
