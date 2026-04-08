/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    // Convert to a list
    const nodes = [];
    let pointer = head;
    do {
        nodes[nodes.length] = pointer;
        pointer = pointer.next;
    } while (pointer);

    // Get the index to remove
    const index = nodes.length - n;

    // Remove first element
    if (0 === index) {
        return nodes[1] ?? null;
    }

    // Skip the index
    nodes[index - 1].next = nodes[index + 1] ?? null;

    return nodes[0];
};

module.exports = { removeNthFromEnd };
