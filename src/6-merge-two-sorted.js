function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    // New list solution - runtime 0 ms
    let list3 = new ListNode();
    let tail = list3;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    // attach remaining nodes
    tail.next = list1 || list2;

    return list3.next;
};

module.exports = { mergeTwoLists };

console.log(mergeTwoLists(list1, list2));
