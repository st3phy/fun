const { isPathCrossing } = require("../src/261-path-crossing.js");

describe("Path Crossing", () => {
    const tests = [
        { args: ["NES"], res: false },
        { args: ["NESWW"], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isPathCrossing(...args)).toStrictEqual(res);
        });
    }
});
