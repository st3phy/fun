const { numJewelsInStones } = require("../src/142-jewels-stones.js");

describe("Jewels And Stones", () => {
    const tests = [
        { args: ["aA", "aAAbbbb"], res: 3 },
        { args: ["z", "ZZ"], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numJewelsInStones(...args)).toStrictEqual(res);
        });
    }
});
