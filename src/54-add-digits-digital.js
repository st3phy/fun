/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => {
    /* abcd = a*10^3 + b*10^2 + c*10^1 + d*10^0
       abcd = a + b + c + d + (a*999 + b*99 + c*9)
       abcd = a + b + c + d + 9*(a*111 + b*11 + c)  
       abcd % 9 = (a + b + c + d) % 9 + 0
    */
    // Ex: 1234 % 9 = (1+2+3+4) % 9 = 11 % 9 = (1+1) % 9 = 2
    if (num !== 0 && num % 9 === 0) {
        return 9;
    }

    return num % 9;
};

module.exports = { addDigits };

console.log(addDigits(38));
