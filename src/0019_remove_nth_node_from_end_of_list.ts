import ExecutionTimer from './utils/execution_timer';
import ListNode from './utils/list_node';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0019. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dict = {}, index = 0
    let headCopy = head

    while (headCopy) { 
        index++
        dict[index] = headCopy
        headCopy = headCopy.next
    }

    if (index - n === 0) return head.next
    dict[index - n].next = dict[index - n].next.next

    return head
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { head: [1,2,3,4,5], n: 2 }, // [1,2,3,5]
        { head: [1], n: 1 }, // []
        { head: [1,2], n: 1 }, // [1]
    ]

    aTestCases.forEach((value) => console.log(value.head, value.n, 
        (() => {
            try {
                return removeNthFromEnd(ListNode.fromArray(value.head), value.n).toArray()
            }
            catch {
                return []
            }
        })()   
    ))
});
