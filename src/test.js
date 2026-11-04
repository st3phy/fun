/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(5);
        }, millis);
    });
}

(async () => {
    console.log(await sleep(250));
})();
