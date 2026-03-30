/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} listA
 * @param {ListNode} listB
 * @return {ListNode}
 */
const mergeTwoLists = (listA, listB) => {
    let mergedHead = { next: null };
    let mergedPointer = mergedHead;

    // Iterate through the two lists to the end
    const pointers = { a: listA, b: listB };
    while (pointers.a || pointers.b) {
        // Decide the list through which to advance next
        const target =
            null === pointers.b ? "a" : null === pointers.a ? "b" : pointers.a.val < pointers.b.val ? "a" : "b";

        // Append the first node of that list
        mergedPointer.next = pointers[target];
        mergedPointer = mergedPointer.next;

        // Move to the next node
        pointers[target] = pointers[target].next;
    }

    return mergedHead.next;
};

module.exports = { mergeTwoLists };
