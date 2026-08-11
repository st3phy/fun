/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = emails => {
    const set = new Set();

    for (let email of emails) {
        let clean = [];
        let plus = false;
        for (let i = 0; i < email.length; i++) {
            // if @ found, add the domain name and break
            if (email[i] === "@") {
                clean.push(email.slice(i));
                break;
            } else {
                // Keep track of found + sign
                if (email[i] === "+") {
                    plus = true;
                }
                // If we have a char that is not a plus and we found no + signs, add the char
                else if (email[i] !== "." && plus === false) {
                    clean.push(email[i]);
                }
            }
        }

        set.add(clean.join(""));
    }

    return set.size;
};

module.exports = { numUniqueEmails };

console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));
