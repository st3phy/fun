const { reverseOnlyLetters } = require("../src/166-reverse-only-letters.js");

describe("Reverse Only Letters", () => {
    const tests = [
        { args: ["ab-cd"], res: "dc-ba" },
        { args: ["a-bC-dEf-ghIj"], res: "j-Ih-gfE-dCba" },
        { args: ["Test1ng-Leet=code-Q!"], res: "Qedo1ct-eeLg=ntse-T!" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reverseOnlyLetters(...args)).toStrictEqual(res);
        });
    }
});
