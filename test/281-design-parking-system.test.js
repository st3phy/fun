const { parkingSystem } = require("../src/281-design-parking-system.js");

describe("Design Parking System", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(parkingSystem(...args)).toStrictEqual(res);
        });
    }
});
