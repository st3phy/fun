const { findRestaurant } = require("../src/114-minimum-index-sum.js");

describe("Minimum Index Sum Of Two Lists", () => {
    const tests = [
        {
            args: [
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
            ],
            res: ["Shogun"]
        },
        {
            args: [
                ["Shogun", "Tapioca Express", "Burger King", "KFC"],
                ["KFC", "Shogun", "Burger King"]
            ],
            res: ["Shogun"]
        },
        {
            args: [
                ["happy", "sad", "good"],
                ["sad", "happy", "good"]
            ],
            res: ["sad", "happy"]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findRestaurant(...args)).toStrictEqual(res);
        });
    }
});
