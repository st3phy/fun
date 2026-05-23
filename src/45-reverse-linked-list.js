function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    // Base case
    if (!head || !head.next) {
        return head;
    }

    // Reverse the rest of the list
    const newHead = reverseList(head.next);

    // Reverse current connection - at this point head === 3; head.next === 4 and newHead === 4;
    head.next.next = head;

    // Update the next pointer of head to null to break the cycle
    head.next = null;

    return newHead;
};

module.exports = { reverseList };

console.log(reverseList(head));
