const { sortPeople } = require("../src/444-sort-people.js");

describe("Sort The People", () => {
    const tests = [
        {
            args: [
                ["Mary", "John", "Emma"],
                [180, 165, 170]
            ],
            res: ["Mary", "Emma", "John"]
        },
        {
            args: [
                ["Alice", "Bob", "Bob"],
                [155, 185, 150]
            ],
            res: ["Bob", "Alice", "Bob"]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortPeople(...args)).toStrictEqual(res);
        });
    }
});
