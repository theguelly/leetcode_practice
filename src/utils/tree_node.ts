/**
 * Added custom definition for binary tree.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    static fromArray(arr: number[]): TreeNode | null {
        if (arr.length === 0) {
            return null;
        }

        const root = new TreeNode(arr[0]);
        const queue = [root];
        let i = 1;

        while (i < arr.length) {
            const current = queue.shift()!;
            if (arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;

            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }

        return root;
    }

    toArray(): number[] {
        const result: number[] = [];
        const queue: (TreeNode | null)[] = [this];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current === null) {
                result.push(null);
            } else {
                result.push(current.val);
                queue.push(current.left);
                queue.push(current.right);
            }
        }

        // Remove trailing null values
        while (result.length > 0 && result[result.length - 1] === null) {
            result.pop();
        }

        return result;
    }
}

export default TreeNode