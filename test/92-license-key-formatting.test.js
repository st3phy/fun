const { licenseKeyFormatting } = require("../src/92-license-key-formatting.js");

describe("License Key Formatting", () => {
    const tests = [
        { args: ["5F3Z-2e-9-w", 4], res: "5F3Z-2E9W" },
        { args: ["2-5g-3-J", 2], res: "2-5G-3J" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(licenseKeyFormatting(...args)).toStrictEqual(res);
        });
    }
});
