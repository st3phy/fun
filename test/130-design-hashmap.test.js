const { MyHashMap } = require("../src/130-design-hashmap.js");

describe("Design HashMap", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(MyHashMap(...args)).toStrictEqual(res);
        });
    }
});
