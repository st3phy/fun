const { distanceBetweenBusStops } = require("../src/205-distance-between-bus.js");

describe("Distance Between Bus Stops", () => {
    const tests = [
        { args: [[1, 2, 3, 4], 0, 1], res: 1 },
        { args: [[1, 2, 3, 4], 0, 2], res: 3 },
        { args: [[1, 2, 3, 4], 0, 3], res: 4 },
        { args: [[7, 10, 1, 12, 11, 14, 5, 0], 7, 2], res: 17 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(distanceBetweenBusStops(...args)).toStrictEqual(res);
        });
    }
});
