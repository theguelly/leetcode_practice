/**
 * Added custom definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    // method for testing purposes only
    static fromArray(arr: number[]): ListNode | null {
        if (arr.length === 0) {
            return null;
        }

        const head = new ListNode(arr[0]);
        let current = head;

        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }

        return head;
    }

    // method for testing purposes only
    toArray(): number[] {
        const arr: number[] = [];
        let current: ListNode | null = this;

        while (current !== null) {
            arr.push(current.val);
            current = current.next;
        }

        return arr;
    }
}

export default ListNode