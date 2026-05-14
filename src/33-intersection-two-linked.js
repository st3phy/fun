/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    // My solution - space complexity O(m+n)
    // let node = headA;

    // const mySet = new Set();

    // // Add all nodes from first list to a Set
    // while (node) {
    //     mySet.add(node);
    //     node = node.next;
    // }

    // node = headB;
    // // Check if any of the nodes from second list exists in the Set
    // while (node) {
    //     if (mySet.has(node)) {
    //         return node;
    //     }
    //     node = node.next;
    // }

    // // No intersection found
    // return null;

    // Optimal solution - no extra space
    let pointA = headA;
    let pointB = headB;

    // Each pointer will traverse A+B total length - they become synchronized in distance, so they hit the intersection at the same time, or null
    while (pointA !== pointB) {
        // If first list reached the end, redirect pointer to start of second list
        pointA = pointA ? pointA.next : headB;
        // If second list reached the end, redirect pointer to start of first list
        pointB = pointB ? pointB.next : headA;
    }

    return pointA;
};

module.exports = { getIntersectionNode };
