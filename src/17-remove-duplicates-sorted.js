function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(3);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
    // Set the pointer to walk through the list
    let curr = head;

    // While there is still a value and a next value
    while (curr && curr.next) {
        // If the current value and next value match, we found a duplicate
        if (curr.val === curr.next.val) {
            // Skip the duplicate node
            curr.next = curr.next.next;
        } else {
            // Advance to next node
            curr = curr.next;
        }
    }

    return head;
};

module.exports = { deleteDuplicates };

console.log(deleteDuplicates(list));
