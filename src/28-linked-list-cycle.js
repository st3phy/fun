function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
    let tortoise = head; // slow pointer, will traverse the list 1 node at a time
    let hare = head; // fast pointer, will traverse the list 2 nodes at a time

    // If the two nodes meet at some point, then there is a cycle
    while (hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;
        if (tortoise === hare) {
            return true;
        }
    }

    return false;

    // Non-optimal solution, using O(n) memory instant of constant
    // An array to keep all nodes we visit
    // const stack = [head];

    // while (head) {
    //     head = head.next;

    //     // If the current node exists in the stack, there is a cycle
    //     if(stack.includes(head)){
    //         return true;
    //     }

    //     // Add the new node to the stack
    //     stack.push(head);
    // }

    // return false;
};

module.exports = { hasCycle };
