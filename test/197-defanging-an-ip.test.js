const { defangIPaddr } = require("../src/197-defanging-an-ip.js");

describe("Defanging An IP Address", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(defangIPaddr(...args)).toStrictEqual(res);
        });
    }
});
