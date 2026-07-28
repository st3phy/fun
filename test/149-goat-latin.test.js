const { toGoatLatin } = require("../src/149-goat-latin.js");

describe("Goat Latin", () => {
    const tests = [
        { args: ["I speak Goat Latin"], res: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa" },
        {
            args: ["The quick brown fox jumped over the lazy dog"],
            res: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(toGoatLatin(...args)).toStrictEqual(res);
        });
    }
});
