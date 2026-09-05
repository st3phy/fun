// // Sort solution
// /**
//  * @param {Number[]} stones
//  * @return {Number}
//  */
// const lastStoneWeight = stones => {
//     while (stones.length > 1) {
//         // Sort stones ascending
//         stones.sort((a, b) => a - b);

//         const len = stones.length;
//         // Replace second to last stone with the result of the smash
//         stones[len - 2] = stones[len - 1] - stones[len - 2];

//         // Remove last stone
//         stones.pop();
//     }

//     return stones[0];
// };

// Max Heap solution - every parent must be >= to its children
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Heapify up
    push(value) {
        this.heap.push(value);
        let i = this.heap.length - 1;

        // Stop comparing when we reach top of heap
        while (i > 0) {
            // Get parent index
            const parentIndex = Math.floor((i - 1) / 2);

            // If current index is smaller of equal to parent value, we have a valid max heap
            if (this.heap[i] <= this.heap[parentIndex]) break;

            // Swap parent and child
            [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];

            // Move i up
            i = parentIndex;
        }
    }

    // Heapify down
    pop() {
        // Save the maximum value
        const max = this.heap[0];

        // One element heap
        if (this.heap.length === 1) {
            this.heap.pop();
            return max;
        }

        // Move last element to root
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            // Find left and right children
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            // No children
            if (left >= this.heap.length) break;

            // Find larger child
            // Assume left is larger
            let larger = left;
            // Check if right is larger
            if (right < this.heap.length && this.heap[right] > this.heap[left]) {
                larger = right;
            }

            // If current is bigger or equal to largest child, we have a valid max heap
            if (this.heap[i] >= this.heap[larger]) break;

            // Swap values
            [this.heap[i], this.heap[larger]] = [this.heap[larger], this.heap[i]];

            // Move i down
            i = larger;
        }

        return max;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

/**
 * @param {Number[]} stones
 * @return {Number}
 */
const lastStoneWeight = stones => {
    // Add stones to the max heap
    const heap = new MaxHeap();
    for (const stone of stones) {
        heap.push(stone);
    }

    while (heap.size() > 1) {
        // Get biggest two stones
        const first = heap.pop();
        const second = heap.pop();
        // Push result of stone smash to max heap
        heap.push(first - second);
    }

    return heap.peek();
};

module.exports = { lastStoneWeight };

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
