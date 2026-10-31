const { deleteGreatesValue } = require("../src/457-delete-greatest-value.js");

describe("Delete Greatest Value In Each Row", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2, 4],
                    [3, 3, 1]
                ]
            ],
            res: 8
        },
        { args: [[[10]]], res: 10 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(deleteGreatesValue(...args)).toStrictEqual(res);
        });
    }
});
