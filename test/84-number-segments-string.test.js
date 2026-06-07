const { countSegments } = require("../src/84-number-segments-string.js");

describe("Number Of Segments In A String", () => {
    const tests = [
        { args: ["Hello, my name is John"], res: 5 },
        { args: ["Hello"], res: 1 },
        { args: [" Hello"], res: 1 },
        { args: ["     Hello"], res: 1 },
        { args: [""], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countSegments(...args)).toStrictEqual(res);
        });
    }
});
