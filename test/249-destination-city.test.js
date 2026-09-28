const { destCity } = require("../src/249-destination-city.js");

describe("Destination City", () => {
    const tests = [
        {
            args: [
                [
                    ["London", "New York"],
                    ["New York", "Lima"],
                    ["Lima", "Sao Paulo"]
                ]
            ],
            res: "Sao Paulo"
        },
        {
            args: [
                [
                    ["B", "C"],
                    ["D", "B"],
                    ["C", "A"]
                ]
            ],
            res: "A"
        },
        { args: [[["A", "Z"]]], res: "Z" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(destCity(...args)).toStrictEqual(res);
        });
    }
});
