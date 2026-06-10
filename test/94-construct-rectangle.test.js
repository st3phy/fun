const { constructRectangle } = require("../src/94-construct-rectangle.js");

describe("Construct The Rectangle", () => {
    const tests = [
        { args: [4], res: [2, 2] },
        { args: [37], res: [37, 1] },
        { args: [122122], res: [427, 286] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(constructRectangle(...args)).toStrictEqual(res);
        });
    }
});
