/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = heights => {
    const sorted = [...heights];
    quickSort(sorted, 0, heights.length - 1);

    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) {
            count++;
        }
    }

    return count;
};

// Lomuto Partition scheme
const partition = (arr, left, right) => {
    // Index for the end of the elements smaller than the pivot
    let i = left - 1;
    // Choose last element as the pivot
    let pivotIndex = right;

    for (let j = left; j < pivotIndex; j++) {
        // If current element is smaller than pivot
        if (arr[j] < arr[pivotIndex]) {
            // Expand region of elements smaller than pivot
            i++;
            // Swap values
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Move pivot after then last element smaller than it
    [arr[i + 1], arr[pivotIndex]] = [arr[pivotIndex], arr[i + 1]];

    // Return pivot index
    return i + 1;
};

const quickSort = (arr, left, right) => {
    // Base case: partition contains 0 or 1 elements
    if (left >= right) return arr;

    const pivotIndex = partition(arr, left, right);
    // sort left side
    quickSort(arr, left, pivotIndex - 1);
    // sort right side
    quickSort(arr, pivotIndex + 1, right);
};

module.exports = { heightChecker };

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
