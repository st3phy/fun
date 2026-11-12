const { distanceTraveled } = require("../src/515-total-distance-traveled.js");

describe("Total Distance Traveled", () => {
    const tests = [
        { args: [5, 10], res: 60 },
        { args: [1, 2], res: 10 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distanceTraveled(...args)).toStrictEqual(res);
        });
    }
});
