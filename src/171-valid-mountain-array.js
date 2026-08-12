/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = arr => {
    // const len = arr.length;

    // // Climb as high as we can
    // let i = 1;
    // while (i < len && arr[i - 1] < arr[i]) {
    //     i++;
    // }

    // // i now holds the peak
    // while (i < len && arr[i - 1] > arr[i]) {
    //     i++;
    // }

    // // If we reached the end of the array, the first 2 values were ascending and the last 2 were descending, we had a peak
    // return len >= 3 && i === len && arr[0] < arr[1] && arr[i - 1] < arr[i - 2];

    // Classic solution, easy to understand
    let asc = true;
    const len = arr.length;

    if (len < 3) return false;
    if (arr[0] >= arr[1]) return false;

    for (let i = 1; i < len; i++) {
        if (arr[i - 1] === arr[i]) {
            return false;
        }
        // If we found a descending value while ascending
        if (asc && arr[i - 1] > arr[i]) {
            // We start our descent
            asc = false;
        }
        // If we found an ascending value while descending
        else if (!asc && arr[i] > arr[i - 1]) {
            // We are at a second peak
            return false;
        }
    }

    return !asc;
};

module.exports = { validMountainArray };

console.log(validMountainArray([0, 3, 2, 1]));
