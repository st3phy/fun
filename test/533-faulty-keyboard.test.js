const { finalString } = require("../src/533-faulty-keyboard.js");

describe("Faulty Keyboard", () => {
    const tests = [
        { args: ["string"], res: "rtsng" },
        { args: ["poiinter"], res: "ponter" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(finalString(...args)).toStrictEqual(res);
        });
    }
});
