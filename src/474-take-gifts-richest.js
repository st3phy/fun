/**
 * @param {number[]} gifts
 * @param {number} k
 * @returns {number}
 */
const pickGifts = (gifts, k) => {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }
        push(value) {
            // Heapify up
            this.heap.push(value);
            let i = this.heap.length - 1;

            // Stop comparing when we reach top of heap
            while (i > 0) {
                // Get parent index
                const parent = Math.floor((i - 1) / 2);

                // If current value is smaller or equal to parent value, we have a valid max heap
                if (this.heap[i] <= this.heap[parent]) break;

                // If not, swap parent and child
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];

                // Move i up
                i = parent;
            }
        }
        pop() {
            // Remove max + heapify down
            // Save max value
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

                // Find largest child
                // Assume left is larger
                let larger = left;
                // Check if right is larger
                if (right < this.heap.length && this.heap[right] > this.heap[left]) larger = right;

                // If current top is equal to or larger than largest child, we have a valid heap
                if (this.heap[i] >= this.heap[larger]) break;

                // Otherwise, swap values
                [this.heap[i], this.heap[larger]] = [this.heap[larger], this.heap[i]];

                // Move i down
                i = larger;
            }

            return max;
        }
        peek() {
            return this.heap[0];
        }
    }

    let sum = 0;
    const heap = new MaxHeap();
    for (const gift of gifts) {
        sum += gift;
        heap.push(gift);
    }

    while (k > 0) {
        // Get max element
        const max = heap.peek();

        // If max element is 1, then all elements are 1
        if (max === 1) return gifts.length;

        // Value to replace the max value with
        const replace = Math.floor(Math.sqrt(max));

        // Update sum
        sum = sum - max + replace;

        // Remove max element and push sqrt element
        heap.pop();
        heap.push(replace);
        k--;
    }

    return sum;
};

module.exports = { pickGifts };

console.log(pickGifts([25, 64, 9, 4, 100], 4));
