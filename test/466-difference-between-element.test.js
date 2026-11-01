const { differenceOfSum } = require("../src/466-difference-between-element.js");

describe("Difference Between Element Sum And Digit Sum Of An Array", () => {
    const tests = [
        { args: [[1, 15, 6, 3]], res: 9 },
        { args: [[1, 2, 3, 4]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(differenceOfSum(...args)).toStrictEqual(res);
        });
    }
});
