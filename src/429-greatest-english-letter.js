/**
 * @param {string} s
 * @return {string}
 */
const greatestLetter = s => {
    const letters = new Array(26).fill(1);

    for (const ch of s) {
        const num = ch.charCodeAt(0);
        // Multiply pos of char with 3 for uppercase letters
        if (ch >= "A" && ch <= "Z") {
            if (letters[num - 65] % 3 !== 0) letters[num - 65] *= 3;
        }
        // Multiply pos of char with 10 for lowercase letters
        else {
            if (letters[num - 97] % 10 !== 0) letters[num - 97] *= 10;
        }
    }

    for (let i = 25; i >= 0; i--) {
        // If current value is divisible with 3 and 10, then we added both upercase and lowercase letters
        if (letters[i] % 3 === 0 && letters[i] % 10 === 0) return String.fromCharCode(i + 65);
    }

    return "";
};

module.exports = { greatestLetter };

console.log(
    greatestLetter(
        "EtaJrJnREOEaurJiCrwnMbUFElllBiCEKbTpbxKUfMVGkBPfrIyOljQQRsVjHqzgAGRQUjoymVNtWKwaylLGiATlpogDvzOqvkpoCpAsFaRNolBPygruHhPPqaCHAzBCcLqAAxxCWrznQpmOMhcqpWIsdKXRiMQTXQBmfPhavhFtUHEVOGHtpisJUVhYvFYvhCChqzwyNXfVPIWpQAdPXttDurohPkjXgaETvoCJQmFpVSoYgOMwxPniKDmvDEoSxLEIHacAageesFOfXyBwiGIrhxgqKjEKbqpONKEkwlyQxlbMzdEYORwXwAqbnDcaijrVuEvtqjDUWiNCgBLYyNRPIrAkRACFtyzBvDpqJbuhNlVPWpmKfxeuxIMFgtKSsXJBCFkgybAKLLouWBFNIacSwvxRKcFUOVzrOcLCCnmHIHUDoVzAJTnLtjdCHIrmpylnOQaXwIYXARFbpVMnGiFhgNcfEjAyPXUPPfKeCbuKQndqHQFCIwmDxeADMdidDusoRVPHUQHTsesjnshnvrUstvyrUuVfhsNVukFuhtibcAhwljaoBQUIrBlVukJorxmjmvJbjqOYycWuiairqSCPtzCYesqMnEaKcmXGeaspjWOcpYgsPakeMRhIUyjEMyIzgHLHSwwbDmOfpVkGFYsVakurdxllEzXkUtUCDYQrRNXEJihyheicfPyShXJDlnFpgMyhdlouubKPsBDETQKoUzDfJuBgOVkwzflYihhKgjzTNtlDUqxBcRCbDVMYFbESsQzLeLMTbBdtDAdzYiHgnXagkUfGbGMPrwXVhAWWJudUDSFyDhJRmrulylFNdsLSvHnSYmIPwDncowYlfrSoQRbbDLPmzSfbtYmPndnMjvuTBcSWNegdTCIPYehqkrpGocrWeBOUyjUPMuPDqJxCbVihdrVYeYiITFKsuPVuuplSIMCcRSekydnEeNrXKjAQoicMfrkMSEaTevwBpTqmKwzv"
    )
);
