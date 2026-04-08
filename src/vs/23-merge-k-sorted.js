/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKListsP = lists => {
    const getMinNode = () => {
        let minNode = null;
        let minVal = null;
        let minIdx = null;

        // Find the minimum
        for (let i = 0; i < lists.length; i++) {
            if ("undefined" === typeof lists[i]?.val || null === lists[i].val) {
                continue;
            }

            if (null !== minVal && minVal <= lists[i].val) {
                continue;
            }

            minNode = lists[i];
            minVal = lists[i].val;
            minIdx = i;
        }

        // Advance
        if (null !== minIdx) {
            lists[minIdx] = lists[minIdx].next;
        }

        return minNode;
    };

    let head = null;
    let node = null;
    do {
        const minNode = getMinNode();
        if (null === minNode) {
            break;
        }

        if (null === node) {
            node = minNode;
            head = node;
        } else {
            node.next = minNode;
            node = node.next;
        }
    } while (true);

    return head;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
    // Fetch sorted values
    const values = [];
    for (let list of lists) {
        while ("undefined" !== typeof list?.val) {
            values.push(list.val);
            list = list.next;
        }
    }

    if (!values.length) {
        return null;
    }

    // Sort
    values.sort((a, b) => a - b);

    // Prepare new list
    const merged = {};
    values.reduce((acc, val) => {
        acc.next = { val, next: null };
        acc = acc.next;

        return acc;
    }, merged);

    return merged.next;
};

module.exports = { mergeKLists };
