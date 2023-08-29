import ExecutionTimer from './utils/execution_timer';
import ListNode from './utils/list_node';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0021. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const result: ListNode = new ListNode()
    let tempResult: ListNode = result
    while (list1 || list2) {
        if (!list2 || list1?.val <= list2.val) {
            tempResult.next = new ListNode(list1.val)
            tempResult = tempResult.next
            list1 = list1.next
            continue
        }
        if (!list1 || list2?.val <= list1.val) {
            tempResult.next = new ListNode(list2.val)
            tempResult = tempResult.next
            list2 = list2.next
            continue
        }
    }
    return result.next
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        { list1: [1], list2: [] }, // [1,1,2,3,4,4]
        { list1: [1,2,4], list2: [1,3,4] }, // [1,1,2,3,4,4]
        { list1: [], list2: [] }, // []
        { list1: [], list2: [0] }, // [0]
    ]

    aTestCases.forEach((value) => console.log(value.list1, value.list2, ' | ', 
        (() => {
            try {
                return mergeTwoLists(ListNode.fromArray(value.list1), ListNode.fromArray(value.list2)).toArray()
            }
            catch(error) {
                return []
            }
        })()))
});
