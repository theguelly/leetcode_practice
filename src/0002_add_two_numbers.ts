import ExecutionTimer from './utils/execution_timer';
import ListNode from './utils/list_node';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0002. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result: ListNode = new ListNode()
    let tempResult: ListNode = result
    let tempSum = 0, tempCarry = 0
    while (l1 || l2 || tempCarry) {
        if (l1) {
            tempSum += l1.val
            l1 = l1.next
        }

        if (l2) {
            tempSum += l2.val
            l2 = l2.next
        }

        if (tempCarry > 0) {
            tempSum += tempCarry
            tempCarry = 0
        }

        if (tempSum > 9) {
            tempCarry = (tempSum - (tempSum % 10)) / 10
            tempSum = tempSum % 10
        }

        tempResult.next = new ListNode(tempSum)
        tempResult = tempResult.next

        tempSum = 0
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
        { l1: [2,4,3], l2: [5,6,4] }, // [7,0,8]
        { l1: [0], l2: [0] }, // [0]
        { l1: [9,9,9,9,9,9,9], l2: [9,9,9,9] }, // [8,9,9,9,0,0,0,1]
    ]

    aTestCases.forEach((value) => console.log(value, addTwoNumbers(ListNode.fromArray(value.l1), ListNode.fromArray(value.l2)).toArray()))
});
