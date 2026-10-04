const { minOperations } = require("../src/280-crawler-log-folder.js");

describe("Crawler Log Folder", () => {
    const tests = [
        { args: [["d1/", "d2/", "../", "d21/", "./"]], res: 2 },
        { args: [["d1/", "d2/", "./", "d3/", "../", "d31/"]], res: 3 },
        { args: [["d1/", "../", "../", "../"]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minOperations(...args)).toStrictEqual(res);
        });
    }
});
