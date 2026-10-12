const { countMatches } = require("../src/314-count-items-matching.js");

describe("Count Items Matching A Rule", () => {
    const tests = [
        {
            args: [
                [
                    ["phone", "blue", "pixel"],
                    ["computer", "silver", "lenovo"],
                    ["phone", "gold", "iphone"]
                ],
                "color",
                "silver"
            ],
            res: 1
        },
        {
            args: [
                [
                    ["phone", "blue", "pixel"],
                    ["computer", "silver", "phone"],
                    ["phone", "gold", "iphone"]
                ],
                "type",
                "phone"
            ],
            res: 2
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countMatches(...args)).toStrictEqual(res);
        });
    }
});
