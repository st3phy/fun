function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

const head2 = new ListNode(7);
head2.next = new ListNode(7);
head2.next.next = new ListNode(7);
head2.next.next.next = new ListNode(7);

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    // // Pointers to current and previous nodes
    // let curr = head;
    // let prev = head;

    // // While we still have nodes
    // while (curr) {
    //     // If we find val at head, move the head
    //     if (curr.val === val && curr === head) {
    //         head = head.next;
    //     }
    //     // Else if we found val
    //     else if (curr.val === val) {
    //         // While the next node is still val
    //         while (curr && curr.val === val) {
    //             // Move forward
    //             curr = curr.next;
    //         }
    //         // The previous node points to the current node, which is != val
    //         prev.next = curr;
    //     }

    //     // Move both pointers to the right
    //     prev = curr;
    //     if (curr) {
    //         curr = curr.next;
    //     }
    // }

    // return head;

    // Solution using dummy node -> to add a node before head
    const dummy = { val: 0, next: head };
    let curr = dummy;

    // Move forward if there is a next node
    while (curr.next) {
        // If the next node's value equals the provided value
        if (curr.next.val === val) {
            // Remove the node by pointing curr.next to curr.next.next
            curr.next = curr.next.next;
        } else {
            // Otherwise, move forward
            curr = curr.next;
        }
    }

    return dummy.next;
};

module.exports = { removeElements };

console.log(removeElements(head, 6));
